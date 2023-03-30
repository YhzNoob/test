const endpoint = 'https://176.9.16.251';

// Set up request headers
const headers = new Headers();
headers.append('Accept', 'application/json');

// Create HTTP/3 request
const request = new Request(endpoint, {
  method: 'GET',
  headers: headers,
});

// Make the request
fetch(request)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
