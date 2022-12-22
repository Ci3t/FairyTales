import './homepage.css';
import './createStory.css';
import hebrewIcon from '../assets/images/hebrewIcon.png';
import arabicIcon from '../assets/images/arabicIcon.png';
import { useState } from 'react';
import StoryList from '../pages/StoryList';
import {  useNavigate } from 'react-router-dom';

const HomePage = () => {
		const navigate = useNavigate();
	const [cultureSelected, setCultureSelected] = useState(null);

	const handleClick = ({ target }) => {
		setCultureSelected(target['name']);
	};

	if (cultureSelected)
		return (
			<StoryList
				culture={cultureSelected}
				setCultureSelected={setCultureSelected}
			/>
		);
	


	return (
		<div className='bgKidImage heightVH'>
			<div>
				<button
					className='text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
					onClick={() => {
						navigate('/new-story')
					}}>
					Tell Us Story
				</button>
			</div>

			<div className='flex flex-col justify-center items-center pt-9 languageSelector text-4xl'>
				<h1>what would you like to read today?</h1>
				<div className='languageSelector__options'>
					<div className='languageSelector__option'>
						<button onClick={handleClick}>
							<img
								src={arabicIcon}
								alt=''
								name='arabic'
							/>
						</button>
					</div>
					<div className='languageSelector__option'>
						<button onClick={handleClick}>
							<img
								src={hebrewIcon}
								alt=''
								name='jewish'
							/>
						</button>
					</div>
					<div className='languageSelector__option text-8xl ruClass'>
						<button
							name='russian'
							onClick={handleClick}>
							Ru
							{/* <img src={hebrewIcon} alt="" />//todo */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
