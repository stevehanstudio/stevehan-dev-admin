import React, { useState, useEffect, MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth, Hub } from 'aws-amplify'

const Header = () => {
  const [signedUser, setSignedUser] = useState(false)
	const navigate = useNavigate()

  useEffect(() => {
		authListener()
  }, [])

  async function authListener() {
		Hub.listen('auth', data => {
			switch (data.payload.event) {
				case 'signIn':
					return setSignedUser(true)
				case 'signOut':
					return setSignedUser(false)
			}
		})
		try {
			await Auth.currentAuthenticatedUser()
			setSignedUser(true)
		} catch(e) {
		}
  }

	const handleLoginOut = async (e:MouseEvent<HTMLElement>) => {
		e.preventDefault()
		if (signedUser) {
			await Auth.signOut()
			// console.log('Logged out', user)
		} else {
			console.log('Navigate to login', navigate)

			navigate(`/login`)
		}
	}

  return (
		<div className='flex flex-row justify-between px-2 py-3 w-full bg-[#2C3E50] text-white absolute top-0 left-0 align-bottom'>
			<Link to='/' className='flex flex-row flex-start align-bottom'>
				<img
					src='/stevehandev.png'
					className='ml-2 my-1 w-[30px] h-[30px]'
					alt='logo emblem'
				/>
				<div className='logo-text text-center pl-1'>
					STEVE HAN
				</div>
				<div className='flex justify-center items-center text-2xl mt-1 font-thin tracking-tighter'>
					.dev
				</div>
				<div className='flex justify-center items-center font-thin text-3xl pl-3'>
					Admin
				</div>
			</Link>
			<Link className='text-xl mt-1 mr-4 text-gray-300 hover:text-white' to='/' onClick={handleLoginOut}>
				{signedUser ? 'Logout' : 'Login'}
			</Link>
		</div>
  )
}

export default Header