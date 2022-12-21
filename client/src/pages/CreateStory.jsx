import React, { useState } from 'react'
import apiFetch from '../components/api/api'
import { createStory } from '../components/api/fetch'

function CreateStory() {
    const [storyInfo, setStoryInfo] = useState({
        title: "",
        storyLink: "",
        culture: "",
        data:""
      });

      const handleChange = ({ target }) => {
        const { value, name } = target;
    
        setStoryInfo({ ...storyInfo, [name]: value });
      };

    const handleSubmit = async()=>{

       const story = await createStory(storyInfo)
     
    }
    const { title, storyLink, culture,data } = storyInfo;
  return (
    <div>

        <label>Title:</label>
        <input type='text' name='title' value={title}   onChange={handleChange}/>
        <label>Story:</label>
        <input type='text' name='storyLink' value={storyLink}  onChange={handleChange}/>
        <label>Culture:</label>
        <input type='text' name='culture' value={culture}  onChange={handleChange}/>
    
        <label>Data:</label>
        <input type='textarea' name='data' value={data}  onChange={handleChange}/>

        <button onClick={handleSubmit}>Submitt</button>


    </div>
  )
}

export default CreateStory