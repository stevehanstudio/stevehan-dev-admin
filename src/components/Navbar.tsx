import { NavLink } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import { GrProjects, GrCertificate, GrAdd } from 'react-icons/gr'
import {
	RiFileDownloadLine,
	RiFileUploadLine,
	// RiLogoutCircleLine,
} from 'react-icons/ri'
import 'react-tooltip/dist/react-tooltip.css'

const projMenu = [
	{
		name: 'PROJECTS',
		url: '/projects',
		icon: GrProjects,
		iconSize: 14,
		tooltip: 'List all projects',
	},
	{
		name: 'Project',
		url: '/create-project',
		icon: GrAdd,
		iconSize: 16,
		tooltip: 'Create new project',
	},
	{
		name: 'Download',
		url: '/download-projects',
		icon: RiFileDownloadLine,
		iconSize: 18,
		tooltip: 'Download JSON file of projects',
	},
	{
		name: 'Upload',
		url: '/upload-projects',
		icon: RiFileUploadLine,
		iconSize: 18,
		tooltip: 'Upload projects in JSON format',
	},
]

const certMenu = [
	{
		name: 'CERTIFICATES',
		url: '/certificates',
		icon: GrCertificate,
		iconSize: 17,
		tooltip: 'List all certificates',
	},
	{
		name: 'Certificate',
		url: '/create-certificate',
		icon: GrAdd,
		iconSize: 17,
		tooltip: 'Create new certificate',
	},
	{
		name: 'Download',
		url: '/download-certificates',
		icon: RiFileDownloadLine,
		iconSize: 18,
		tooltip: 'Download JSON file of certificates',
	},
	{
		name: 'Upload',
		url: '/upload-certificates',
		icon: RiFileUploadLine,
		iconSize: 18,
		tooltip: 'Upload certificates in JSON format',
	},
]

const Navbar = () => {
  // const location = useLocation()
  // console.log(location)

	return (
		<div className='background-gradient pt-10'>
			<Tooltip id='my-tooltip' />
			<nav className='nav-menu'>
				{projMenu.map((item, i) => (
					<NavLink
						key={i}
						className='menu-item'
						to={item.url}
						data-tooltip-id='my-tooltip'
						data-tooltip-content={item.tooltip}
						data-tooltip-place='right'
						data-tooltip-variant='info'
						data-tooltip-offset={-12}
					>
						<item.icon size={item.iconSize} />
						<span className='ml-2'>{item.name}</span>
					</NavLink>
				))}
			</nav>
			<nav className='nav-menu'>
				{certMenu.map((item, i) => (
					<NavLink
						key={i}
						className='menu-item'
						to={item.url}
						data-tooltip-id='my-tooltip'
						data-tooltip-content={item.tooltip}
						data-tooltip-place='right'
						data-tooltip-variant='info'
						data-tooltip-offset={8}
					>
						<item.icon size={item.iconSize} />
						<span className='ml-2 align-baseline'>{item.name}</span>
					</NavLink>
				))}
			</nav>
			{/* <NavLink className='menu-item' to='/logout'>
				<RiLogoutCircleLine />
				<span className='ml-2'>Logout</span>
			</NavLink> */}
		</div>
	)
}

export default Navbar
