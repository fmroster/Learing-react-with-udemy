import axios from 'axios'


const searchImages = async (term)=> {

    const response = await axios.get('https://api.unsplash.com./search/photos',{
        headers:{
            Authorization: 'Client-ID mGeC0mFvBBwgeszL3wl0rBH_DOXdf7wLQ3XYZfI7cwI'
        },params:{
            query: term
        }
    })

    // console.log(response.data.results)
    return response.data.results

}

export default searchImages