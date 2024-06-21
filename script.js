// Sample items list
const items = [
    { id: 1, img: 'images/amelia-bullmore.png', desc: 'Amelia Bullmore' },
    { id: 2, img: 'images/catherine-tate.jpg', desc: 'Catherine Tate' },
    { id: 3, img: 'images/julia-davis.jpg', desc: 'Julia Davis' },
    { id: 4, img: 'images/kevin-eldon.jpg', desc: 'Kevin Eldon' },
    { id: 5, img: 'images/mark-heap.jpg', desc: 'Mark Heap' },
    { id: 6, img: 'images/nick-frost.jpg', desc: 'Nick Frost' },
    { id: 7, img: 'images/phil-cornwell.jpg', desc: 'Phil Cornwell' },
    { id: 8, img: 'images/rebecca-front.jpg', desc: 'Rebecca Front' },
    { id: 9, img: 'tracy-ann-oberman.jpg', desc: 'Tracy-Ann Oberman' },
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
