// JavaScript for search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.item');
    
    items.forEach(function(item) {
        const itemName = item.querySelector('h2').textContent.toLowerCase();
        
        if (itemName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// JavaScript for POST button click event
document.querySelector('.POST-button').addEventListener('click', function() {
    alert('You clicked the POST button!');
    // You can add further functionality here, such as redirecting to a POST page
});

// JavaScript for BUY button click event
document.querySelector('.BUY-button').addEventListener('click', function() {
    alert('You clicked the BUY button!');
    // You can add further functionality here, such as redirecting to a BUY page
});

// JavaScript for individual buy buttons on products
const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('You clicked the Buy button for ' + this.parentElement.querySelector('h2').textContent + '!');
        // You can add further functionality here, such as adding the item to a cart
    });
});
