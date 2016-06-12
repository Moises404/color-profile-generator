import omit from 'lodash/object/omit'
import assign from 'lodash/object/assign'
import mapValues from 'lodash/object/mapValues'

import { setCurrentPost } from './dashboard'
// import dashboard from './dashboard'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const FAVE_POST = 'FAVE_POST'
const ADD_TEXT_TO_POST = 'ADD_TEXT_TO_POST'
const ADD_TAG_TO_POST = 'ADD_TAG_TO_POST'

let nextPostId = 0
let nextTextId = 0
let nextTagId = 0

export function addTextToPost(postId, text) {
  const textId = nextTextId++
  return {
    'type': ADD_TEXT_TO_POST,
    postId,
    textId,
    text
  }
}

export function addTagToPost(postId, tag) {
  const tagId = nextTagId++
  return {
    'type': ADD_TAG_TO_POST,
    postId,
    tagId,
    tag
  }
}

export function addPost(text) {
  const postId = nextPostId++

  return dispatch => {
    dispatch(setCurrentPost(postId))
    dispatch({
      'type': ADD_POST,
      postId
    })
    if (text) dispatch(addTextToPost(postId, text))
  }
}

export function deletePost(postId) {
  return {
    'type': DELETE_POST,
    postId
  }
}

export function favePost(postId) {
  return {
    'type': FAVE_POST,
    postId
  }
}

const initialPostState = {
  posts: [],
  postsById: {}
}

export default function post(state = initialPostState, action) {
  switch (action.type) {
    case ADD_POST :
      // const newPostId = state.posts[state.posts.length - 1] + 1
      // const newPostId = nextPostId++

      return {
        posts: state.posts.concat(action.postId),
        postsById: {
          ...state.postsById,
          [action.postId]: {
            'id': action.postId,
            'texts': []
          }
        }
      }
    case DELETE_POST :
      return {
        ...state,
        posts: state.posts.filter(id => id !== action.id),
        postsById: omit(state.postsById, action.id)
      }
    case ADD_TEXT_TO_POST :
      return {
        ...state,
        postsById: {
          ...state.postsById,
          [action.postId]: {
            'id': action.postId,
            'texts': state.postsById[action.postId].texts.concat(action.textId),
            'textsById': {
              ...state.postsById[action.postId].textsById,
              [action.textId]: {
                'id': action.textId,
                'text': action.text
              }
            }
          }
        }
      }
    case FAVE_POST : {
      return {
        ...state,
        postsById: mapValues(state.postsById, (p) => {
          return p.id === action.id ?
            assign({}, post, { fave: !post.fave}) :
            post
        })
      }
    }
    default:
      return state
  }
}

// import * as types from '../constants/ActionTypes'
// import { setCurrentPost } from '../redux/modules/dashboard'

// let nextPostId = 0
// let nextTextId = 0
// let nextTagId = 0

// export function selectPost(postId) {
//   return (dispatch) => (
//     dispatch({
//       'type': types.SELECT_POST,
//       postId
//     })
//   )
// }

// export function selectTextInPost(textId) {
//   return (dispatch) => (
//     dispatch({
//       'type': types.SELECT_TEXT_IN_POST,
//       textId
//     })
//   )
// }

// export function addTextToPost(postId, text) {
//   return (dispatch) => (
//      dispatch({
//       'type': types.ADD_TEXT_TO_POST,
//       'textId': nextTextId++,
//       postId,
//       text
//     })
//   )
// }

// export function addTagToPost(postId, tag) {
//   return (dispatch) => (
//     dispatch({
//       'type': types.ADD_TAG_TO_POST,
//       'tagId': nextTagId++,
//       postId,
//       tag
//     })
//   )
// }

// export function addPost(text) {
//   const postId = nextPostId++
//   return (dispatch) => ([
//     dispatch(setCurrentPost(postId)),
//     dispatch({
//       'type': types.ADD_POST,
//       postId,
//       'currentPostId': postId,
//       text
//     })
//   ]
//   )
// }

// export function deletePost(postId) {
//   return (dispatch) => (
//      dispatch({
//       'type': types.DELETE_POST,
//       postId
//     })
//   )
// }

// export function toggleFavorite(id) {
//   return (dispatch) => (
//     dispatch({
//       'type': types.TOGGLE_FAVORITE,
//       id
//     })
//   )
// }

// export function setVisibilityFilter(filter) {
//   return {
//     'type': types.SET_VISIBILITY_FILTER,
//     filter
//   }
// }
