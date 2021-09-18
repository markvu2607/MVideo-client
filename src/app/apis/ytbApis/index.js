
import axios from "axios"
const KEY = "AIzaSyAbQ35gGbTvy4yV5FPMfjzEFvydufU82kA"

export default axios.create(
  {
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
      part: "snippet",
      maxResults: 5,
      key: KEY
    }
  }
)