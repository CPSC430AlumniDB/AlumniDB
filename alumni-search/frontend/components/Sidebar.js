import Link from 'next/link'

const Sidebar = () => {
	return(
		<nav> 
			<ul>
					<li>
						<Link href = "/list">Alumni List</Link>
					</li>
					<li>
						<Link href = "/search">Search</Link>
					</li>
					<li>
						<Link href = "/pending">Pending Alumni</Link>
					</li>
					<li>
						<Link href= "/email">Email</Link>
					</li>
					<li>
						<Link href= "/logout">Log Out</Link>
					</li>
			</ul>
		</nav>
	
	)
}

export default Sidebar
