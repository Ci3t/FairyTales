import './story.css'
import back from '../assets/images/back.png'
import { NavLink } from 'react-router-dom'
const Randomstory = () => {
    return (
        <div className="story">
            <NavLink to="/"><button className="story__btn"><img width="20px" src={back}></img> Back to home page</button></NavLink>
            <p className="story__category">Arabic Story</p>
            <h1 className="story__title">Story Title</h1>
            <div className="story__content">
                <p className="story__paragraph">
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                </p>
                <p className="story__paragraph">
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                </p>
                <p className="story__paragraph">
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                </p>
            </div>
        </div>
    )
}

export default Randomstory;