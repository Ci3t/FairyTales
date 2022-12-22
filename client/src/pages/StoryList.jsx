import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStories } from '../components/api/fetch';
import './createStory.css';

const StoryList = ({ culture, setCultureSelected }) => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		const Allstories = async () => {
			const story = await getStories();
			setStories(story);
			console.log(story);
		};
		Allstories();
	}, []);

	const handleBackButton = (e) => {
		setCultureSelected((prev) => null);
	};
	return (
		<div className='bgKidImage heightVH'>
			<header>
				<ul className='flex [&>*:nth-child(odd)]:bg-amber-200  [&>*:nth-child(even)]:bg-violet-300  flex-col flex-wrap    justify-content items-center p-9 '>
					{stories?.map((story) => {
						if (story.culture === culture)
							return (
								<li
									className='mb-5 hover:fill-slate-400 hover:scale-110 ml-4 rounded text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
									key={story._id}>
									<Link
										className='block max-w-sm p-6 bg-transparent rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
										to={`/stories/${story._id}`}>
										{story.title}
									</Link>
								</li>
							);
						else return false;
					})}
				</ul>

				<button
					className='text-gray-900 text-2xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
					onClick={handleBackButton}>
					Back
				</button>
			</header>
		</div>
	);
};
export default StoryList;
