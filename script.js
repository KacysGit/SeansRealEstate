document.addEventListener('DOMContentLoaded', function() {
    const propertyList = document.getElementById('property-list');

    const properties = [
        {
            title: 'Modern Family Home',
            image: 'property1.jpg',
            description: 'A beautiful 4-bedroom family home in a quiet suburb.',
        },
        {
            title: 'Downtown Apartment',
            image: 'property2.jpg',
            description: 'A luxurious 2-bedroom apartment in the heart of the city.',
        },
        {
            title: 'Cozy Cottage',
            image: 'property3.jpg',
            description: 'A charming 3-bedroom cottage with a large garden.',
        }
    ];

    properties.forEach(property => {
        const propertyItem = document.createElement('div');
        propertyItem.classList.add('property-item');
        propertyItem.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>${property.description}</p>
        `;
        propertyList.appendChild(propertyItem);
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
