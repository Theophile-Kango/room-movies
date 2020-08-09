import * as actions from './actionTypes';

const initialState = {
  items: [],
}
const movies = (state = initialState, action) => {
  switch(action.type){
    case actions.FETCH_MOVIES:
      return { items: action.data }
    default:
      return state;
    }
};

const filterMovies = (filter, movies) => {
  if (filter !== 'All') {
    const filtered = movies.filter(movie => movie.release_date.split('-')[0] === filter);
    return filtered;

  }
  return movies;
};

const filterMovieId = (filter, movies) => {
  const filtered = movies.filter(movie => movie === filter);
  return filtered;
}

const filterId = (action) => {
  if (action.type === actions.FILTER_BY_ID) return action.id;
}

const filter = (state = 'All', action) => {
  if (action.type === actions.CHANGE_FILTER) return action.release_date;
  return state; 
};

export { movies, filter, filterMovies, filterMovieId, filterId };
