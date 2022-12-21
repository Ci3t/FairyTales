import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStories } from '../components/api/fetch';

const StoryList = () => {
	const [stories, setStories] = useState([]);
	useEffect(() => {
		const Allstories = async () => {
			const story = await getStories();
			setStories(story);
		}
		Allstories();
	})
	console.log(stories);


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