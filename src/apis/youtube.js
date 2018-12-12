import axios from 'axios';

const KEY = 'AIzaSyCDNehlUlLpqeoF06RQOJXPb3FdGo3XUvY';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
