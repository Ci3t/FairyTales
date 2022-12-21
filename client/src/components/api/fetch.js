import apiFetch from "./api";


export const createStory = async(story)=>{
    try{

        const {data} = await apiFetch.post('/tale',story)
        return data
    }catch(error){
        const {response} = error
        if(response?.data) return response.data

        return {error:error.message || error}
     
    }

}

export const getStories = async()=>{
    try{

        const {data} = await apiFetch.get('/tales')
        return data
    }catch(error){
        const {response} = error
        if(response?.data) return response.data

        return {error:error.message || error}
     
    }

}

export const getSingleStory = async(story)=>{
    try{

        const {data} = await apiFetch.get(`/tales/${story}`)
        return data
    }catch(error){
        const {response} = error
        if(response?.data) return response.data

        return {error:error.message || error}
     
    }

}