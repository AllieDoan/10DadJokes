const button = document.getElementById('btn');
const joke = document.getElementById('joke');

console.log(joke);


async function generateRandomJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();

    console.log(data);

    joke.innerText = data.joke;
}

// function generateRandomJoke() {
//     fetch('https://icanhazdadjoke.com/', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             joke.innerText = data.joke;
//         })
// }

// async function generateRandomJoke() {
//     const response = await fetch('https://api.chucknorris.io/jokes/random');
//     const data = await response.json();

//     console.log(data);

//     joke.innerText = data.value;
// }

generateRandomJoke();

button.addEventListener('click', generateRandomJoke);