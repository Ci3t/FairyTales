
import { Link } from "react-router-dom";
import "./homepage.css"
import hebrewIcon from '../assets/images/hebrewIcon.png'
import arabicIcon from '../assets/images/arabicIcon.png'
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
		
			<div className="header">
				<div className="header__motd">
					<div className="header__slogen">
						All of the Hebrew 
						and Arabic stories
					</div>
					<div className="header__small">
						In one place
					</div>
				</div>
			</div>	
			<div className="languageSelector">
				<h1>Choose a language</h1>
				<div className="languageSelector__options">
					<Link to="/hebrew">
					<div className="languageSelector__option">
						<img src={arabicIcon} alt="" />
						<b>Hebrew Stories</b>
					</div>
					</Link>
					<Link to="/arabic">
					<div className="languageSelector__option">
						<img src={hebrewIcon} alt="" />
						<b>Arabic Stories</b>
					</div>
					</Link>
				</div>
			</div>
		</>
		);
    
}
export default HomePage ;

// // 
// const Homepage () => {
//     const [query, setQuery] = useState('')

//     const handleQuery = (e) => {
//         const val = e.target.value;
//     }
    
// }
