function searchDestinations() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const recommendations = {
        beach: ["beach"],
        temple: ["temple"],
        country: ["country"]
    };

    let matchedDestination = null;
    let suggestions = [];

    for (let category in recommendations) {
        recommendations[category].forEach(keyword => {
            if (searchQuery.includes(keyword)) {
                matchedDestination = category;
                suggestions.push(category); 
            }
        });
    }

    
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';

    if (matchedDestination) {
        alert(`Found matching recommendations for ${matchedDestination}  please scroll down`);
        
        
        document.getElementById(`${matchedDestination}-recommendation`).style.display = 'block';
        
        
        suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = `Suggested: ${suggestion}`;
            suggestionsContainer.appendChild(suggestionElement);
        });

    } else {
        alert("No matching destinations found.");
    }
}


function bookNow() {
    document.getElementById('bookingModal').style.display = "block";
}


function closeModal() {
    document.getElementById('bookingModal').style.display = "none";
}


window.onclick = function(event) {
    if (event.target == document.getElementById('bookingModal')) {
        closeModal();
    }
}

