/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

const baseURL = "https://swapi.dev/api/people/1/";

setTimeout(() => console.log('This should print last'), 1000);

    async function fetchData(){
        await fetch("https://swapi.dev/api/people/1/")
            .then(res => res.json())
            .then(json => console.log(json))
    }