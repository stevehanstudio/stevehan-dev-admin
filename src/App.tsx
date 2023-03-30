import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Projects from './pages/Projects'
import CreateProject from './pages/CreateProject'
import Certificates from './pages/Certificates'
import Project from './routes/Project'
import Certificate from './routes/Certificate'
import EditProject from './routes/EditProject'
import EditCertificate from './routes/EditCertificate'
import CreateCertificate from './pages/CreateCertificate'
import NotFound from './pages/NotFound'
// import './App.css';
import './amplifyConfiguration'
import Header from './components/Header'
import Upload from './pages/Upload'
import Download from './pages/Download'

function App() {
	const location = useLocation()

  return (
		<div className='w-full h-full'>
			<Header />
			<div className='flex flex-row mt-14 w-full min-h-[calc(100vh_-_56px)] overflow-y-auto'>
				<Navbar />
				<Routes location={location} key={location.pathname}>
					<Route id='home' path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/create-project' element={<CreateProject />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/edit-project/:id' element={<EditProject />} />
					<Route
						path='/download-projects'
						element={<Download componentType='project' />}
					/>
					<Route
						path='/upload-projects'
						element={<Upload componentType='project' />}
					/>
					<Route path='/certificates' element={<Certificates />} />
					<Route
						path='/create-certificate'
						element={<CreateCertificate />}
					/>
					<Route path='/certificate/:id' element={<Certificate />} />
					<Route
						path='/edit-certificate/:id'
						element={<EditCertificate />}
					/>
					<Route
						path='/download-certificates'
						element={<Download componentType='certificate' />}
					/>
					<Route
						path='/upload-certificates'
						element={<Upload componentType='certificate' />}
					/>
					{/* <Route path='/about' element={<About />} /> */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
  )
}

export default App;
