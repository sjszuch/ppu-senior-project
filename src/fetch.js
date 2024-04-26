document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        rating: document.getElementById('rating').value,
    };


    const url = "https://ppu-senior-project.onrender.com/api";
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
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

    document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.addEventListener('DOMContentLoaded', function() {
        const url = "https://ppu-senior-project.onrender.com/api";
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data from API');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data retrieved successfully:', data);
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
            });
    });
