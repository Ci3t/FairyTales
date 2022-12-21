
import React, { useState } from 'react';

import './createStory.css';
import { createStory } from '../components/api/fetch';

function CreateStory() {
  const [storyInfo, setStoryInfo] = useState({
    title: "",

    culture: "",
    data: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setStoryInfo({ ...storyInfo, [name]: value });
  };

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(storyInfo);
		const story = await createStory(storyInfo);
	};
	const { title, culture, data } = storyInfo;

	return (
		<div className='bgKidImage mt-0'>
			<div className=' mt-5 ml-auto mr-auto flex justify-center items-center max-w-4xl'>
				<div className='ml-5 mt-5  p-6 w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
					<form onSubmit={handleSubmit}>
						<div className=' relative z-0  mb-6 w-full group'>
							<input
								type='text'
								name='title'
								value={title}
								onChange={handleChange}
								className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
								placeholder=' '
								required
							/>
							<label
								htmlFor='title'
								className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
								Title
							</label>
						</div>
						<div className='relative z-0 mb-6 w-full group'>
							<label htmlFor='cars'>Choose a culture:</label>

							<select
								onChange={handleChange}
								value={culture}
								name='culture'
								id='culture'>
								<option>arabic</option>
								<option>jewish</option>
								<option>russian</option>
							</select>
						</div>
						<div className='relative z-0 mb-6 w-full group'>
							<label
								htmlFor='message'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
								Tell us a story
							</label>
							<textarea
								id='message'
								name='data'
								value={data}
								onChange={handleChange}
								rows='4'
								className=' h-full block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Tell us your Story...'></textarea>
						</div>

						<button
							onClick={handleChange}
							type='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CreateStory;
