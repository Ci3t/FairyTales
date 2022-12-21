// homepage
// story
// title story

import{ useState } from "react";

const HomePage = () => {
    const [state, setState] = useState('');
    const handleState = (e) => {
        const value = e.target.value;
        setState(value);
    }
	const hendleSearch = () => {	
		}
    return (
			<>
				<div className='home'>
					<h1>Welcome</h1>
					<h3>this is it</h3>
				</div>
				<input
					type='text'
					value={state}
					onChange={handleState}
				/>
				<button onClick={hendleSearch}>input</button>
			</>
		);
    
}
export default HomePage ;

