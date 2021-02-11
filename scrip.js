const Form = document.querySelector('form');
let InputValue = '';
Form.addEventListener('submit', (a) => {
    a.preventDefault();
    InputValue = a.target.querySelector('input').value;
    Affiche();
});

function Affiche() {
    const url = `https://restcountries.eu/rest/v2/name/${InputValue}?fbclid=IwAR1-hadl5EpXh6sWm7hCQUadlc2Ro_VfFo0br_zdx8R3DFObToPkRazQOUo`;
    fetch(url).then((response) =>
        response.json().then((data) =>  {
            console.log(data);


            for (let i = 0; i < 251; i++) {
                document.querySelector('#city').innerHTML = data[i].name;
                document.querySelector('#capital').innerHTML = data[i].capital;
                document.querySelector('#demonym').innerHTML = data[i].demonym;
                document.querySelector('#languages').innerHTML = data[i].languages[0].nativeName;
                document.querySelector('#region').innerHTML = data[i].region;
                document.querySelector('#population').innerHTML = data[i].population;


            }


        }))

}