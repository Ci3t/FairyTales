import { useEffect, useState } from 'react';
import './story.css';
import { getSingleStory } from '../components/api/fetch';
import { useNavigate, useParams } from 'react-router-dom';
import useTranslate from '../components/hooks/use-translate';
import './createStory.css';

export default function TalePage({ culture, setCultureSelected }) {
	const { id } = useParams();
	const [storyText, setStoryText] = useState(null);

	const [state, setState] = useState({
		error: null,
		loading: false,
		story: null,
  });
  
  const navigate = useNavigate()

	const { translateStringFunc } = useTranslate(setStoryText);

	useEffect(() => {
		const some = async () => {
			setState((st) => ({ ...st, loading: true }));
			try {
				const story = await getSingleStory(id);
				// console.log(story);
				setState((st) => ({ ...st, story }));
				setStoryText(story.data);
			} catch (error) {
				setState((st) => ({ ...st, error }));
			} finally {
				setState((st) => ({ ...st, loading: false }));
				// console.log(state.story);
			}
		};
		some();
	}, [id]);

	const handleLanguageSelect = ({ target }) => {
		if (!target.value) return;
		translateStringFunc(state.story.data, target.value);
	};

	// const handleBackButton = (e) => {
	// 	setCultureSelected((prev) => null);
	// };

	return (
		<div className='bgKidImage heightVH'>
			<div className='p-7'>
				<p className=' text-4xl  rounded-2xl  max-w-md p-3 ml-auto mr-auto  text-fuchsia-600 font-semibold'>
					Culture: {state.story?.culture}
				</p>
				<h1 className='story__title text-6xl'>{state.story?.title}</h1>
				<div className='flex justify-center'>
					<div className='mr-auto ml-auto max-w-7xl text-justify p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-7'>
						<button
							className='text-gray-900 text-2xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
							onClick={() => {
								navigate('/');
							}}
							> Back
						</button>

						<select
							className=' mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-xl p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-9'
							onChange={handleLanguageSelect}>
							<option>select language</option>
							<option value='en'>english</option>
							<option value='ru'>russian</option>
							<option value='he'>hebrew</option>
							<option value='ar'>arabic</option>
						</select>

						<div className='story__content mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left '>
							{storyText && storyText}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
