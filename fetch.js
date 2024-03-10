const data = {
    firstName: "John",
    lastName: "Doe",
    position: "Software Engineer"
};

const url = "https://example.com/api/add-entry";
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
};

// post req
fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('No response');
        }
        return response.json();
    })
    .then(data => {
        console.log('Entry added successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem adding the data:', error);
    });
