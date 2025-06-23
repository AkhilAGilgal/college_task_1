document.addEventListener('DOMContentLoaded', () => {
    const eventContainer = document.getElementById('event-container');

  
    if (eventsData.length === 0) {
        eventContainer.innerHTML = "<p>No upcoming events at this time. Please check back later!</p>";
        return;
    }

   
    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';

       
        card.innerHTML = `
            <img src="${event.image}" alt="${event.name}" class="event-image">
            <div class="event-details">
                <h3>${event.name}</h3>
                <p class="event-date">${event.date}</p>
                <p class="event-description">${event.description}</p>
                <a href="${event.paymentLink}" class="event-button" target="_blank">Register & Pay</a>
            </div>
        `;

        
        eventContainer.appendChild(card);
    });
});
