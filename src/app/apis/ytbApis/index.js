
import axios from "axios"
import { convert_time } from "app/utils"

const KEY = "AIzaSyAbQ35gGbTvy4yV5FPMfjzEFvydufU82kA"
const ytbApis = axios.create(
  {
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
      part: "snippet",
      maxResults: 5,
      key: KEY
    }
  }
)

export const getVideoById = async (id) => {
  const res = await ytbApis.get('/videos', {
    params: {
      id: id,
      part: "contentDetails"
    }
  })
  return res.data.items[0]
}

export const searchByQ = async (q) => {
  const listVideoSearch = await ytbApis.get('/search', {
    params: {
      q: q
    }
  }).then(async ({ data }) => {
    const listVideoSearch = data.items
    for (const index in listVideoSearch) {
      const videoId = listVideoSearch[index].id.videoId
      const video = await getVideoById(videoId)
      const itemNew = {
        id: listVideoSearch[index].id.videoId,
        img: listVideoSearch[index].snippet.thumbnails.default.url,
        title: listVideoSearch[index].snippet.title,
        duration: convert_time(video.contentDetails.duration) < 3600 ?
          new Date(convert_time(video.contentDetails.duration) * 1000)
            .toISOString().substr(14, 5) :
          new Date(convert_time(video.contentDetails.duration) * 1000)
            .toISOString().substr(11, 8),
        channelTitle: listVideoSearch[index].snippet.channelTitle
      }
      listVideoSearch[index] = itemNew
    }
    return listVideoSearch
  })

  return listVideoSearch
}

