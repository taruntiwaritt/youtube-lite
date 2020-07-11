import axios from 'axios'

const KEY ="AIzaSyCEDzP5qvpE3Robz8r4t52JjXP8C6PpsZ4"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 5,
        type:'video',
        key: KEY
    }
})