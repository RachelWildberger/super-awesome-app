const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-key:'
        'X-RapidAPI-Host:'
    }
};
fetch()
    .then(response => response.json())
    .then(respons => console.log(response))