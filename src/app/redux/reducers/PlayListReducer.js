import { ADD_VIDEO, NEXT_VIDEO, PLAY_VIDEO } from "../actions/PlayListActions"

const initialState = {
  currentVideoRedux: {
    // id: "xypzmu5mMPY"
  },
  videosRedux: [
    // {
    //   id: "S7KA4tQ483o",
    //   title: "HIEUTHUHAI - SINH NHẬT (prod. by Wonderlust)",
    //   img: "https://i.ytimg.com/vi/S7KA4tQ483o/default.jpg"
    // }
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