import {API_KEY} from './constants/constants'
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const Action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const ComedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const Horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const Romantic = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
