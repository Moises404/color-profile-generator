const SET_CURRENT_POST = 'SET_CURRENT_POST'
const SET_CURRENT_TEXT = 'SET_CURRENT_TEXT'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SELECT_TEXT_IN_POST = 'SELECT_TEXT_IN_POST'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
const DELETE_POST = 'DELETE_POST'


export function selectTextInPost(postId, textId) {
  return {
    'type': SELECT_TEXT_IN_POST,
    postId,
    textId
  }
}

export function setCurrentPost(postId) {
  return {
    type: SET_CURRENT_POST,
    postId
  }
}

export function setCurrentText(postId, textId) {
  return {
    type: SET_CURRENT_TEXT,
    postId,
    textId
  }
}

export function visibilityFilter(filter = 'SHOW_ALL') {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export function deletePost(postId) {
  return {
      'type': DELETE_POST,
      postId
  }
}

export function toggleFavorite(id) {
  return {
    'type': TOGGLE_FAVORITE,
    id
  }
}

const initialState = {
  currentPostId: '',
  currentTextId: ''
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_POST :
      return {
        ...state,
        currentPostId: action.postId
      }
    case SET_CURRENT_TEXT :
      return {
        ...state,
        currentPostId: action.postId,
        currentTextId: action.textId
      }
    case SET_VISIBILITY_FILTER :
      return {
        ...state,
        visibilitFilter: action.filter
      }
    default :
      return state
  }
}
