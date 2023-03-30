import React, { useState, FormEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from 'aws-amplify'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const onUsernameChange = (e: FormEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement
		if (target) {
			setUsername(target.value)
		}
	}

	const onPasswordChange = (e: FormEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement
		if (target) {
			setPassword(target.value)
		}
	}

	async function signIn(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		try {
			const user = await Auth.signIn(username, password)
			console.log('user:', user)
			navigate('/')
		} catch (error) {
			console.log('error signing in', error)
		}
	}

	return (
		<div className='section'>
			<p className='max-w-2xl mt-6'>
				This page is meant for me to log in with my admin crendentials.
			</p>
			<form className='max-w-2xl mx-auto mt-12 py-14 px-28 rounded-md border-gray-100 border-2 shadow-md'>
				<div className='text-3xl text-gray-600 font-medium mb-12'>
					Admin Login
				</div>
				<div className='input-fields'>
					<label htmlFor='username'>User Name</label>
					<input
						type='text'
						onChange={onUsernameChange}
						name='username'
						value={username}
					/>
				</div>
				<div className='input-fields'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						onChange={onPasswordChange}
						name='password'
						value={password}
					/>
				</div>
				<button
					className='bg-blue-500 hover:bg-blue-400 mt-8 w-full rounded-md px-3 py-2 text-white'
					onClick={signIn}
				>
					LOGIN
				</button>
			</form>
		</div>
	)
}

export default Login
