import movies from './movies'
import firstBy from 'thenby'

// thunk action creator to get movies only if not already done
export function shouldGetMovies() {
  return (dispatch, getState) => {
    const { get } = getState()
    if (get) {
      return
    }
    dispatch(getPopularMovies())
    dispatch(toggleGet())
  }
}

export function getPopularMovies() {
  //
  // movies contains the results of two API requests
  //

  //
  // 1. combine the results of these requests
  // 2. sort the results FIRST by year THEN by title
  // 3. each movie object in the results needs a releaseYear attribute added
  //    this is used in src/components/movies-list.js line 25
  //
  const combinedResults = []
  movies.forEach(movieList => {
    movieList.forEach(movie => {
      combinedResults.push(movie)
    })
  })
  const yearFormat = combinedResults.map(movie => {
    let title = movie.title
    let releaseYear = +title.slice(title.length - 5, title.length - 1)
    return Object.assign({}, movie, { releaseYear })
  })
  const sortedMovies = yearFormat.sort(
    firstBy('releaseYear')
      .thenBy('title')
  )
  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: sortedMovies
  }
}

export function toggleGet() {
  return {
    type: 'TOGGLE_GET'
  }
}


