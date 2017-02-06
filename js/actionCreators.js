import { SET_SEARCH_TERM } from './actions'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}

// es6 is
// export function setSearchTerm (searchTerm) {
//   return { type: SET_SEARCH_TERM, searchTerm }
// }
