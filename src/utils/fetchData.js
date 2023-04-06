
export const movieOptions = {
    method: 'GET',
    // url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    params: {q: 'batman'},
    headers: {
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
}


export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};