var button = document.querySelector('#btn');
var btn1 = document.querySelector('#btn1');
var setup = document.querySelector('#setup');
var delivery = document.querySelector('#delivery');

button.addEventListener('click', () => {
    fetch('http://v2.jokeapi.dev/joke/any?')
        .then((data) => data.json())
        .then(res => {
            console.log(res);
            setup.innerHTML = res.setup;
            // if (btn1) {
            delivery.innerHTML = res.delivery;
            // }
        })
        .catch(err => console.log(err.message));
});
