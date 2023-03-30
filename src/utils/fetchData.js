
export const movieOptions = {
    method: 'GET',
    // url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    params: {q: 'batman'},
    headers: {
      'X-RapidAPI-Key': 'e117fcacabmshf2e2baa8a0278dbp1a3225jsn89c226964580',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
}


export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};