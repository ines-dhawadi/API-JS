const searchForm = document.querySelector('form');
const SearchResultDiv = document.querySelector('.serach-result');
let searchQuery = '';
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchApi();
});
async function fetchApi() {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}?fbclid=IwAR1-hadl5EpXh6sWm7hCQUadlc2Ro_VfFo0br_zdx8R3DFObToPkRazQOUo&q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < 250; i++) {
        document.querySelector('#city').innerHTML = data[i].name;
        document.querySelector('#capital').innerHTML = data[i].capital;
        document.querySelector('#demonym').innerHTML = data[i].demonym;
        document.querySelector('#languages').innerHTML = data[i].language;
        document.querySelector('#region"').innerHTML = data[i].region;
        document.querySelector('#population').innerHTML = data[i].population;


    }

}