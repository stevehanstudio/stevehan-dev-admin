import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from 'aws-amplify'
import toast, { Toaster } from 'react-hot-toast'
// import GraphQLAPI from '@aws-amplify/api-graphql'
// import * as graphQlApi from '../graphql/API'
// import { GraphQLQuery } from '@aws-amplify/api'
import { listProjects } from '../graphql/queries'
import { deleteProject as deleteProjectMutation } from '../graphql/mutations'
import { ComponentType, DataType } from '../types'
import { isUserAuthenticated } from '../utility/auth'

interface Props {
  componentType: ComponentType
}

const ListComponent:React.FC<Props> = ({ componentType }) => {
	// const [projects, setProjects] = useState<DataType[]>([])
	const [projects, setProjects] = useState<DataType[]>([])
	const navigate = useNavigate()

	useEffect(() => {
		fetchProjects()
	}, [])

	async function fetchProjects() {
		try {
			// const projectData = await API.graphql<GraphQLQuery<typeof listProjects>>({
			// 	query: listProjects
			// })
			const projectData = (await API.graphql({
				query: listProjects,
				// }) as { data: {listProjects: {items: GraphQLAPI.DataType[]}}}
			})) as { data: { listProjects: { items: DataType[] } } }

			if (projectData.data) {
				// console.log('projectData', projectData.data.listProjects.items)
				setProjects(projectData.data.listProjects.items.reverse())
			}
		} catch (e) {
			console.log('Error:', e)
		}

		// if (projectData && projectData.data) {
		// 	console.log(projectData.data.listProjects.items)
		// }

		// setProjects(projectData.data.listProjects.items)
	}
	console.log('projects', projects)

	async function deleteProject(id: string) {
		try {
			if (await isUserAuthenticated() === false) {
				toast.error('You need to be logged in as a admin to delete a project')
				return
			}
			await API.graphql({
				query: deleteProjectMutation,
				variables: { input: { id } },
				// authMode: 'AMAZON_COGNITO_USER_POOLS',
			})
			fetchProjects()
		} catch (e) {
			console.log('Error:', e)
		}
	}

	return (
		<div className='section w-3/4 min-w-max'>
			<Toaster position='top-right' reverseOrder={false} />
			<h1 className='section-title border-b uppercase'>{componentType}s</h1>
			{projects &&
				projects.map((project, i) => (
					<div
						key={i}
						className='flex flex-row justify-between items-center border-b'
					>
						<span className='font-semibold pr-4 my-4'>
							{project.title}
						</span>
						<span>
							<button
								onClick={() => navigate(`/project/${project.id}`)}
								className='rounded-2xl px-2 py-1 mx-2 my-1 button-green text-white text-sm'
							>
								View
							</button>
							<button
								className='rounded-2xl px-2 py-1 mx-2 my-1 button-blue text-white text-sm'
								onClick={() => navigate(`/edit-project/${project.id}`)}
							>
								Edit
							</button>
							<button
								className='rounded-2xl px-2 py-1 mx-2 my-1 button-red text-white text-sm'
								onClick={() => deleteProject(project.id)}
							>
								Delete
							</button>
						</span>
					</div>
				))}
		</div>
	)
}

export default ListComponent
