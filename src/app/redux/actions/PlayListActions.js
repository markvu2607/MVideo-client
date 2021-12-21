export const ADD_VIDEO = 'ADD_VIDEO'
export const NEXT_VIDEO = 'NEXT_VIDEO'
export const PLAY_VIDEO = 'PLAY_VIDEO'
export const DELETE_VIDEO = 'DELETE_VIDEO'

export const addVideo = (video) => {
  return {
    type: ADD_VIDEO,
    payload: video
  }
}

export const nextVideo = () => {
  return {
    type: NEXT_VIDEO
  }
}

export const playVideo = (video) => {
  return {
    type: PLAY_VIDEO,
    payload: video
  }
}

export const deleteVideo = (video, dispatch) => {
  return {
    type: DELETE_VIDEO,
    payload: video
  }
}