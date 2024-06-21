const items = [
    { id: 1, img: 'images/amelia-bullmore.png', desc: 'Amelia Bullmore', votes: 0 },
    { id: 2, img: 'images/catherine-tate.jpg', desc: 'Catherine Tate', votes: 0 },
    { id: 3, img: 'images/david-schneider.jpeg', desc: 'David Schneider', votes: 0 },
    { id: 4, img: 'images/doon-mackichan.jpg', desc: 'Doon Mackichan', votes: 0 },
    { id: 5, img: 'images/julia-davis.jpg', desc: 'Julia Davis', votes: 0 },
    { id: 6, img: 'images/kevin-eldon.jpg', desc: 'Kevin Eldon', votes: 0 },
    { id: 7, img: 'images/mark-heap.jpg', desc: 'Mark Heap', votes: 0 },
    { id: 8, img: 'images/nick-frost.jpg', desc: 'Nick Frost', votes: 0 },
    { id: 9, img: 'images/phil-cornwell.jpg', desc: 'Phil Cornwell', votes: 0 },
    { id: 10, img: 'images/rebecca-front.jpg', desc: 'Rebecca Front', votes: 0 },
    { id: 11, img: 'images/tracy-ann-oberman.jpg', desc: 'Tracy-Ann Oberman', votes: 0 },
    // Add more items here
];

let currentPair = [];

function getRandomPair() {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

function displayItems() {
    currentPair = getRandomPair();
    document.getElementById('img1').src = currentPair[0].img;
    document.getElementById('desc1').textContent = currentPair[0].desc;
    document.getElementById('img2').src = currentPair[1].img;
    document.getElementById('desc2').textContent = currentPair[1].desc;
}

function vote(itemNumber) {
    currentPair[itemNumber - 1].votes++;
    displayItems();
    displayRankings();
}

function displayRankings() {
    const sortedItems = [...items].sort((a, b) => b.votes - a.votes);
    let rankingsHTML = '<h2>Rankings</h2><ol>';
    sortedItems.forEach(item => {
        rankingsHTML += `<li>${item.desc} - ${item.votes} votes</li>`;
    });
    rankingsHTML += '</ol>';
    document.getElementById('rankings').innerHTML = rankingsHTML;
}

window.onload = function() {
    displayItems();
    displayRankings();
};
