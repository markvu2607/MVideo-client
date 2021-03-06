import {
  ADD_VIDEO,
  DELETE_VIDEO,
  NEXT_VIDEO,
  PLAY_VIDEO
} from "../actions/PlayListActions"

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
      return {
        ...state,
        videosRedux: [
          ...state.videosRedux,
          action.payload
        ]

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
    case DELETE_VIDEO: {
      const videosRedux = state.videosRedux.filter((video) => video.id !== action.payload.id)
      return {
        ...state,
        videosRedux
      }
    }
    default:
      return state
  }
}

export default PlayListReducer