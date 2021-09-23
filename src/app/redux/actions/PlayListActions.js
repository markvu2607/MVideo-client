export const ADD_VIDEO = 'ADD_VIDEO'
export const NEXT_VIDEO = 'NEXT_VIDEO'
export const PLAY_VIDEO = 'PLAY_VIDEO'

export const addVideo = (video, dispatch) => {
  video.currentTime = 0
  dispatch({ type: ADD_VIDEO, payload: video })
}

export const nextVideo = (dispatch) => {
  dispatch({ type: NEXT_VIDEO })
}

export const playVideo = (video, dispatch) => {
  dispatch({ type: PLAY_VIDEO, payload: video })
}