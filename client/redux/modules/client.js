export const SET_CLIENT = 'SET_CLIENT'

export function setClient(client) {
  return (dispatch) => (
     dispatch({
      'type': SET_CLIENT,
      client
    })
  )
}

export default function client(state = {}, action) {
  switch (action.type) {
    case SET_CLIENT:
      return action.client
    default:
      return state
  }
}
