export default function(state={favorites: []}, action){
  switch(action.type){
    case 'SHOW_FAVORITES':
      return {...state, favorites: action.favorite_info}
    case 'UPDATE_FAVORITES':
      return {...state, favorites: action.favorite_info}
    case 'DELETE_FAVORITE':
      return {...state, favorites: action.favorite_info}
    case 'LOG_OUT':
      return {favorites: []}
    default:
      return state
  }
}
