
// fetch("https://swapi.dev/api/people/1/")
//   .then( (response) => {
//     console.log('Responce status: ',  response.status);
//     return response.json();
//   })
//   .then( (body) => {
//     console.log(body);
//   })


const getResource = async (url) => {

  const response = await fetch(url);

  const body = await response.json();

  return body;
}

getResource("https://swapi.dev/api/people/1/")
  .then( (result) => {
    console.log(result);
  })
  .catch( error => console.log(error))