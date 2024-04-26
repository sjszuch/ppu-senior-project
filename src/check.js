document.addEventListener('DOMContentLoaded', function() {
    const url = "https://ppu-senior-project.onrender.com/api";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data from API');
            }
            return response.json();
        })
        .then(apiData => {
            console.log('Data retrieved successfully from API:', apiData);
            const firstNameElement = document.getElementById('firstName');
            const lastNameElement = document.getElementById('lastName');
            const ratingElement = document.getElementById('rating');

            if (apiData.firstName !== firstNameElement.value ||
                apiData.lastName !== lastNameElement.value ||
                apiData.rating !== ratingElement.value) {
                console.warn('Data on the page is out of sync with API');
                firstNameElement.value = apiData.firstName;
                lastNameElement.value = apiData.lastName;
                ratingElement.value = apiData.rating;
            } else {
                console.log('Data on the page is synced with API');
            }
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });
});

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        rating: document.getElementById('rating').value
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
});
