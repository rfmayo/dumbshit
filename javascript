// Sample items list
const items = [
    { id: 1, img: 'img1.jpg', desc: 'Item 1 Description' },
    { id: 2, img: 'img2.jpg', desc: 'Item 2 Description' },
    // Add more items here
];

let currentPair = [];

// Function to get two random items
function getRandomPair() {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

// Function to display items
function displayItems() {
    currentPair = getRandomPair();
    document.getElementById('img1').src = currentPair[0].img;
    document.getElementById('desc1').textContent = currentPair[0].desc;
    document.getElementById('img2').src = currentPair[1].img;
    document.getElementById('desc2').textContent = currentPair[1].desc;
}

// Function to handle voting
function vote(itemNumber) {
    const winner = currentPair[itemNumber - 1];
    // Store or process the vote, then refresh the items
    console.log('Voted for:', winner);
    displayItems();
}

// Initialize the display
window.onload = displayItems;
