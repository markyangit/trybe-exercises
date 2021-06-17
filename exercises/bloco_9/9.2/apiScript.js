const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = async () => {
  const answer = await fetch(API_URL, myObject)
  .then(response => console.log(response));
  document.getElementById('jokeContainer').innerText = `${answer.joke}`;
};

window.onload = () => fetchJoke();
