const items = [
    { id: 1, img: 'images/abi-clarke.png', desc: 'Abi Clarke', votes: 0 },
    { id: 2, img: 'images/adam-bloom.png', desc: 'Adam Bloom', votes: 0 },
    { id: 3, img: 'images/adam-buxton-.png', desc: 'Adam Buxton ', votes: 0 },
    { id: 4, img: 'images/adam-hills.png', desc: 'Adam Hills', votes: 0 },
    { id: 5, img: 'images/adam-kay.png', desc: 'Adam Kay', votes: 0 },
    { id: 6, img: 'images/adam-riches.png', desc: 'Adam Riches', votes: 0 },
    { id: 7, img: 'images/adil-ray.png', desc: 'Adil Ray', votes: 0 },
    { id: 8, img: 'images/ahir-shah.png', desc: 'Ahir Shah', votes: 0 },
    { id: 9, img: 'images/alan-carr.png', desc: 'Alan Carr', votes: 0 },
    { id: 10, img: 'images/alasdair-beckett-king.png', desc: 'Alasdair Beckett-King', votes: 0 },
    { id: 11, img: 'images/alex-brooker.png', desc: 'Alex Brooker', votes: 0 },
    { id: 12, img: 'images/alexander-armstrong.png', desc: 'Alexander Armstrong', votes: 0 },
    { id: 13, img: 'images/alice-lowe.png', desc: 'Alice Lowe', votes: 0 },
    { id: 14, img: 'images/alun-cochrane.png', desc: 'Alun Cochrane', votes: 0 },
    { id: 15, img: 'images/amelia-bullmore.png', desc: 'Amelia Bullmore', votes: 0 },
    { id: 16, img: 'images/amy-gledhill.png', desc: 'Amy Gledhill', votes: 0 },
    { id: 17, img: 'images/andi-osho.png', desc: 'Andi Osho', votes: 0 },
    { id: 18, img: 'images/andrew-maxwell.png', desc: 'Andrew Maxwell', votes: 0 },
    { id: 19, img: 'images/andy-hamilton.png', desc: 'Andy Hamilton', votes: 0 },
    { id: 20, img: 'images/arabella-weir.png', desc: 'Arabella Weir', votes: 0 },
    { id: 21, img: 'images/archie-henderson.png', desc: 'Archie Henderson', votes: 0 },
    { id: 22, img: 'images/armando-iannucci.png', desc: 'Armando Iannucci', votes: 0 },
    { id: 23, img: 'images/ava-vidal.png', desc: 'Ava Vidal', votes: 0 },
    { id: 24, img: 'images/bec-hill.png', desc: 'Bec Hill', votes: 0 },
    { id: 25, img: 'images/ben-miller.png', desc: 'Ben Miller', votes: 0 },
    { id: 26, img: 'images/ben-norris.png', desc: 'Ben Norris', votes: 0 },
    { id: 27, img: 'images/ben-willbond.png', desc: 'Ben Willbond', votes: 0 },
    { id: 28, img: 'images/big-narstie.png', desc: 'Big Narstie', votes: 0 },
    { id: 29, img: 'images/bill-bailey.png', desc: 'Bill Bailey', votes: 0 },
    { id: 30, img: 'images/blindboy-boatclub.png', desc: 'Blindboy Boatclub', votes: 0 },
    { id: 31, img: 'images/brett-domino.png', desc: 'Brett Domino', votes: 0 },
    { id: 32, img: 'images/cariad-lloyd.png', desc: 'Cariad Lloyd', votes: 0 },
    { id: 33, img: 'images/carl-donnelly.png', desc: 'Carl Donnelly', votes: 0 },
    { id: 34, img: 'images/catherine-bohart.png', desc: 'Catherine Bohart', votes: 0 },
    { id: 35, img: 'images/catherine-tate.png', desc: 'Catherine Tate', votes: 0 },
    { id: 36, img: 'images/celya-ab.png', desc: 'Celya AB', votes: 0 },
    { id: 37, img: 'images/charlie-brooker.png', desc: 'Charlie Brooker', votes: 0 },
    { id: 38, img: 'images/charlie-higson.png', desc: 'Charlie Higson', votes: 0 },
    { id: 39, img: 'images/chloe-petts.png', desc: 'Chloe Petts', votes: 0 },
    { id: 40, img: 'images/chris-addison.png', desc: 'Chris Addison', votes: 0 },
    { id: 41, img: 'images/chris-mccausland.png', desc: 'Chris McCausland', votes: 0 },
    { id: 42, img: 'images/chris-odowd.png', desc: 'Chris O'Dowd', votes: 0 },
    { id: 43, img: 'images/dan-tiernan.png', desc: 'Dan Tiernan', votes: 0 },
    { id: 44, img: 'images/dana-alexander.png', desc: 'Dana Alexander', votes: 0 },
    { id: 45, img: 'images/dane-baptiste.png', desc: 'Dane Baptiste', votes: 0 },
    { id: 46, img: 'images/darren-harriott.png', desc: 'Darren Harriott', votes: 0 },
    { id: 47, img: 'images/david-mitchell.png', desc: 'David Mitchell', votes: 0 },
    { id: 48, img: 'images/david-odoherty.png', desc: 'David O'Doherty', votes: 0 },
    { id: 49, img: 'images/deborah-frances-white.png', desc: 'Deborah Frances-White', votes: 0 },
    { id: 50, img: 'images/deirdre-okane.png', desc: 'Deirdre O'Kane', votes: 0 },
    { id: 51, img: 'images/diane-morgan.png', desc: 'Diane Morgan', votes: 0 },
    { id: 52, img: 'images/dom-joly.png', desc: 'Dom Joly', votes: 0 },
    { id: 53, img: 'images/doon-mackichan.png', desc: 'Doon Mackichan', votes: 0 },
    { id: 54, img: 'images/dylan-moran.png', desc: 'Dylan Moran', votes: 0 },
    // Add more items here
];

let currentPair = [];

function getRandomPair() {
    const availableItems = items.filter(item => !item.dismissed);
    const shuffled = availableItems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

function displayItems() {
    currentPair = getRandomPair();
    if (currentPair.length < 2) {
        alert("No more items to compare!");
        return;
    }
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

function dismiss(itemNumber) {
    currentPair[itemNumber - 1].dismissed = true;
    displayItems();
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
