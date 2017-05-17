import axios from 'axios';

const API_KEY = 'f6f6ac003f3b15245000d5b2ab33d706';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
const DETAILS_URL = `https://api.themoviedb.org/3/movie/<MOVIE_ID>?api_key=${API_KEY}&language=en-US`;


export default {

  search: (searchTerm) => {
    let encodedSearchTerm = encodeURIComponent(searchTerm);
    let requestURL = `${SEARCH_URL}${encodedSearchTerm}`;

    return axios.get(requestURL).then((res) => {
      if (!res.status === 200) {
        throw new Error(res.statusText);
      } else {
        return res.data.results;
      }
    }, (e) => {
      throw new Error('Unable to fetch search results');
    });
  }

};
