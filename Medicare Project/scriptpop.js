document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.querySelector('.okay-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
document.getElementById('openPopup').addEventListener('click', function() {
    // Show the popup
    document.getElementById('popup').style.display = 'flex';

    // Hide the button
    this.style.display = 'none';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';

    // Show the button again
    document.getElementById('openPopup').style.display = 'inline-block';
});

document.querySelector('.okay-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';

    // Show the button again
    document.getElementById('openPopup').style.display = 'inline-block';
});
