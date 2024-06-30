const items = [
    { id: 1, img: 'images/img1.jpg', desc: "Item 1's Description", votes: 0, dismissed: false },
    { id: 2, img: 'images/img2.jpg', desc: "Item 2's Description", votes: 0, dismissed: false },
    // Add more items here
];

let currentPair = [];

// Function to get a new random item that is not dismissed and not in the current pair
function getNewItem(excludeItemId) {
    const availableItems = items.filter(item => !item.dismissed && item.id !== excludeItemId);
    const randomIndex = Math.floor(Math.random() * availableItems.length);
    return availableItems[randomIndex];
}

// Function to display items, with optional replacement of a specific item
function displayItems(replaceItemIndex = null) {
    if (replaceItemIndex !== null) {
        const itemToKeep = currentPair[1 - replaceItemIndex];
        const newItem = getNewItem(itemToKeep.id);
        if (replaceItemIndex === 0) {
            currentPair = [newItem, itemToKeep];
        } else {
            currentPair = [itemToKeep, newItem];
        }
    } else {
        currentPair = getRandomPair();
    }

    if (currentPair.length < 2) {
        alert("No more items to compare!");
        return;
    }

    document.getElementById('img1').src = currentPair[0].img;
    document.getElementById('desc1').textContent = currentPair[0].desc;
    document.getElementById('img2').src = currentPair[1].img;
    document.getElementById('desc2').textContent = currentPair[1].desc;
}

function getRandomPair() {
    const availableItems = items.filter(item => !item.dismissed);
    const shuffled = availableItems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

function vote(itemNumber) {
    currentPair[itemNumber - 1].votes++;
    displayItems();
    displayRankings();
}

function dismiss(itemNumber) {
    currentPair[itemNumber - 1].dismissed = true;
    displayItems(itemNumber - 1);
}

function displayRankings() {
    const sortedItems = [...items].sort((a, b) => b.votes - a.votes).slice(0, 5);
    sortedItems.sort((a, b) => a.desc.localeCompare(b.desc));

    let rankingsHTML = '<h2>Top 5 Items</h2><div class="top-items">';
    sortedItems.forEach(item => {
        rankingsHTML += `
            <div class="top-item">
                <img src="${item.img}" alt="${item.desc}">
                <p>${item.desc} - ${item.votes} votes</p>
            </div>`;
    });
    rankingsHTML += '</div>';

    document.getElementById('top-rankings').innerHTML = rankingsHTML;
}

window.onload = function() {
    displayItems();
    displayRankings();
};
