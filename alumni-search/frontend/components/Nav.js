import Link from 'next/link'

const Sidebar = () => {
	return(
		<nav>
			<ul>
				<li>
					<Link href = "/">Home</Link>
				</li>
				<li>
					<Link href = "/search">Search</Link>
				</li>
				<li>
					<Link href = "/login">Log Out</Link>
				</li>
				<li>
					<Link href= "/">Login</Link>
				</li>
				<li>
					<Link href= "/">Register</Link>
				</li>
			</ul>
		</nav>
	
	)
}

export default Sidebar
