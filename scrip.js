let apicall = function(ville) {
    let url = `https://restcountries.eu/rest/v2/all?fbclid=IwAR1-hadl5EpXh6sWm7hCQUadlc2Ro_VfFo0br_zdx8R3DFObToPkRazQOUo&name=${ville}`;
    fetch(url).then((response) =>
        response.json()
        .then((data) => {
            console.log(data)
                //for (let i = 0; i < data.results.length; i++)
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#capital').innerHTML = data.capital;
            document.querySelector('#demonym').innerHTML = data.demonym;

            document.querySelector('#nativeName').innerHTML = data.nativeName;
            document.querySelector('#population').innerHTML = data.population;
            document.querySelector('#demonym').innerHTML = data.demonym;
        })
        .catch(err => console.log('Erreur:' + err)))


}
document.querySelector('form').addEventListener("submit", function(e) {
    e.preventDefault();
    let search = document.querySelector('#inputCountry').Value;
    apicall(search);
});