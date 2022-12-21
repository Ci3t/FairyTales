import { Link } from 'react-router-dom'

const StoryList = () => {
    return (
			<header>
				<ul>
					<li>
						<Link
							className='link'
							to='/'>
							some text
						</Link>
					</li>
					<li>
						<Link
							className='link'
							to='/'>
							some text
						</Link>
					</li>
					<li>
						<Link
							className='link'
							to='/'>
							some text
						</Link>
					</li>
					<li>
						<Link
							className='link'
							to='/'>
							Home text
						</Link>
					</li>
					<li>
						<Link
							className='link'
							to='/'>
							some text
						</Link>
					</li>
					<li>
						<Link
							className='link'
							to='/'>
							Home text
						</Link>
					</li>
				</ul>
			</header>
		);

    
}
export default StoryList;