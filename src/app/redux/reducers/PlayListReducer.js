import { ADD_VIDEO, NEXT_VIDEO, PLAY_VIDEO } from "../actions/PlayListActions"

const initialState = {
  currentVideoRedux: {
    id: "8bBmDAtHUJY",
    title: "a",
    duration: 260
  },
  videosRedux: [
    {
      id: "kTJczUoc26U",
      title: "The Kid LAROI, Justin Bieber - STAY (Official Video)",
      duration: 158,
      img: "https://i.ytimg.com/vi/4JbCxj3J48o/default.jpg"
    },
    {
      id: "FLGCGc7sAUw",
      title: "Bella Poarch - Build a B*tch (Official Music Video)",
      duration: 169,
      img: "https://i.ytimg.com/vi/4JbCxj3J48o/default.jpg"
    }
  ]
}

const PlayListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIDEO: {
      const videosRedux = state.videosRedux
      videosRedux.push(action.payload)
      return {
        ...state,
        videosRedux
      }
    }
    case NEXT_VIDEO: {
      const videosRedux = state.videosRedux
      const currentVideoRedux = videosRedux.shift()
      return {
        ...state,
        currentVideoRedux,
        videosRedux
      }
    }
    case PLAY_VIDEO: {
      const currentVideoRedux = action.payload
      const videosRedux = state.videosRedux.filter((video) => video.id !== currentVideoRedux.id)
      return {
        ...state,
        currentVideoRedux,
        videosRedux
      }
    }
    default:
      return state
  }
}

export default PlayListReducer