import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from 'aws-amplify'
// import GraphQLAPI from '@aws-amplify/api-graphql'
// import * as graphQlApi from '../graphql/API'
// import { GraphQLQuery } from '@aws-amplify/api'
import { listCertificates } from '../graphql/queries'
import { deleteCertificate as deleteCertificateMutation } from '../graphql/mutations'
import { DataType } from '../types'

export const Certificates = () => {
		// const [projects, setProjects] = useState<DataType[]>([])
		const [certificates, setCertificates] = useState<DataType[]>([])
		const navigate = useNavigate()

		useEffect(() => {
			fetchProjects()
		}, [])

		async function fetchProjects() {
			try {
				// const projectData = await API.graphql<GraphQLQuery<typeof listProjects>>({
				// 	query: listProjects
				// })
				const certificateData = await API.graphql({
					query: listCertificates
				// }) as { data: {listProjects: {items: GraphQLAPI.DataType[]}}}
				}) as { data: {listCertificates: {items: DataType[]}}}

				if (certificateData.data) {
					// console.log('projectData', projectData.data.listProjects.items)
					setCertificates(certificateData.data.listCertificates.items)
				}
			} catch (e) {
				console.log('Error:', e)
			}

			// if (projectData && projectData.data) {
			// 	console.log(projectData.data.listProjects.items)
			// }

			// setProjects(projectData.data.listProjects.items)
		}
		// console.log('certificates', certificates)

		async function deleteCertificate(id:string) {
			try {
				await API.graphql({
					query: deleteCertificateMutation,
					variables: { input: { id }},
				})
				fetchProjects()
			} catch (e) {
				console.log("Error:", e)
			}
		}

		return (
			<div className='section w-3/4 min-w-max'>
				<h1 className='section-title border-b'>Certificates</h1>
				{certificates &&
					certificates.map((certificate, i) => (
						<div
							key={i}
							className='flex flex-row justify-between items-center border-b'
						>
							<span className='font-semibold pr-4 my-4'>
								{certificate.title}
							</span>
							<span>
								<button
									onClick={() =>
										navigate(`/certificate/${certificate.id}`)
									}
									className='rounded-2xl px-2 py-1 mx-2 my-1 button-green text-white text-sm'
								>
									View
								</button>
								<button
									className='rounded-2xl px-2 py-1 mx-2 my-1 button-blue text-white text-sm'
									onClick={() =>
										navigate(`/edit-certificate/${certificate.id}`)
									}
								>
									Edit
								</button>
								<button
									className='rounded-2xl px-2 py-1 mx-2 my-1 button-red text-white text-sm'
									onClick={() => deleteCertificate(certificate.id)}
								>
									Delete
								</button>
							</span>
						</div>
					))}
			</div>
		)
}

export default Certificates


// import ListComponent from '../components/ListComponent'

// const Projects = () => {
// 	return (
// 		<ListComponent componentType='project' />
// 	)
// }

// const Projects = () => {
// 	// const [projects, setProjects] = useState<DataType[]>([])
// 	const [projects, setProjects] = useState<DataType[]>([])
// 	const navigate = useNavigate()

// 	useEffect(() => {
// 		fetchProjects()
// 	}, [])

// 	async function fetchProjects() {
// 		try {
// 			// const projectData = await API.graphql<GraphQLQuery<typeof listProjects>>({
// 			// 	query: listProjects
// 			// })
// 			const projectData = await API.graphql({
// 				query: listProjects
// 			// }) as { data: {listProjects: {items: GraphQLAPI.DataType[]}}}
// 			}) as { data: {listProjects: {items: DataType[]}}}

// 			if (projectData.data) {
// 				// console.log('projectData', projectData.data.listProjects.items)
// 				setProjects(projectData.data.listProjects.items)
// 			}
// 		} catch (e) {
// 			console.log('Error:', e)
// 		}

// 		// if (projectData && projectData.data) {
// 		// 	console.log(projectData.data.listProjects.items)
// 		// }

// 		// setProjects(projectData.data.listProjects.items)
// 	}
// 	console.log('projects', projects)

// 	async function deleteProject(id:string) {
// 		try {
// 			await API.graphql({
// 				query: deleteProjectMutation,
// 				variables: { input: { id }},
// 			})
// 			fetchProjects()
// 		} catch (e) {
// 			console.log("Error:", e)
// 		}
// 	}

// 	return (
// 		<div className='section w-3/4 min-w-max'>
// 			<h1 className='section-title border-b'>Projects</h1>
// 			{projects &&
// 				projects.map((project, i) => (
// 					<div
// 						key={i}
// 						className='flex flex-row justify-between items-center border-b'
// 					>
// 						<span className='font-semibold pr-4 my-4'>
// 							{project.title}
// 						</span>
// 						<span>
// 							<button
// 								onClick={() => navigate(`/project/${project.id}`)}
// 								className='rounded-2xl px-2 py-1 mx-2 my-1 button-green text-white text-sm'
// 							>
// 								View
// 							</button>
// 							<button
// 								className='rounded-2xl px-2 py-1 mx-2 my-1 button-blue text-white text-sm'
// 								onClick={() => navigate(`/edit-project/${project.id}`)}
// 							>
// 								Edit
// 							</button>
// 							<button
// 								className='rounded-2xl px-2 py-1 mx-2 my-1 button-red text-white text-sm'
// 								onClick={() => deleteProject(project.id)}
// 							>
// 								Delete
// 							</button>
// 						</span>
// 					</div>
// 				))}
// 		</div>
// 	)
// }

