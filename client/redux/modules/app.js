import fetch from 'isomorphic-fetch'

const FETCH_FIRE_SUCCESS = 'FETCH_FIRE_SUCCESS'

export function fetchFireSuccess(json) {
  return {
    'type': FETCH_FIRE_SUCCESS,
    'fire': json,
  }
}

export function fetchFire() {
  const API = process.env.API || 'http://localhost:3000/api'

  return (dispatch) => (
    fetch(`${API}/getDB`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchFireSuccess(json)))
      .catch((error) => console.log(error))
  )
}
