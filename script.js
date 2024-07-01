const items = [
    { id: 1, img: 'images/adam-bloom.png', desc: "Adam Bloom", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 2, img: 'images/adam-buxton.png', desc: "Adam Buxton", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 3, img: 'images/adam-hills.png', desc: "Adam Hills", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 4, img: 'images/adam-kay.png', desc: "Adam Kay", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 5, img: 'images/adam-riches.png', desc: "Adam Riches", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 6, img: 'images/adil-ray.png', desc: "Adil Ray", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 7, img: 'images/ahir-shah.png', desc: "Ahir Shah", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 8, img: 'images/alan-carr.png', desc: "Alan Carr", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 9, img: 'images/alasdair-beckett-king.png', desc: "Alasdair Beckett-King", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 10, img: 'images/alex-brooker.png', desc: "Alex Brooker", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 11, img: 'images/alexander-armstrong.png', desc: "Alexander Armstrong", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 12, img: 'images/alice-lowe.png', desc: "Alice Lowe", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 13, img: 'images/alun-cochrane.png', desc: "Alun Cochrane", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 14, img: 'images/amelia-bullmore.png', desc: "Amelia Bullmore", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 15, img: 'images/amy-gledhill.png', desc: "Amy Gledhill", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 16, img: 'images/andi-osho.png', desc: "Andi Osho", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 17, img: 'images/andrew-maxwell.png', desc: "Andrew Maxwell", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 18, img: 'images/andy-hamilton.png', desc: "Andy Hamilton", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 19, img: 'images/arabella-weir.png', desc: "Arabella Weir", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 20, img: 'images/archie-henderson.png', desc: "Archie Henderson", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 21, img: 'images/armando-iannucci.png', desc: "Armando Iannucci", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 22, img: 'images/ava-vidal.png', desc: "Ava Vidal", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 23, img: 'images/bec-hill.png', desc: "Bec Hill", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 24, img: 'images/ben-miller.png', desc: "Ben Miller", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 25, img: 'images/ben-norris.png', desc: "Ben Norris", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 26, img: 'images/ben-willbond.png', desc: "Ben Willbond", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 27, img: 'images/big-narstie.png', desc: "Big Narstie", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 28, img: 'images/bill-bailey.png', desc: "Bill Bailey", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 29, img: 'images/blindboy-boatclub.png', desc: "Blindboy Boatclub", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 30, img: 'images/brett-domino.png', desc: "Brett Domino", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 31, img: 'images/cariad-lloyd.png', desc: "Cariad Lloyd", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 32, img: 'images/carl-donnelly.png', desc: "Carl Donnelly", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 33, img: 'images/catherine-bohart.png', desc: "Catherine Bohart", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 34, img: 'images/catherine-tate.png', desc: "Catherine Tate", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 35, img: 'images/celya-ab.png', desc: "Celya AB", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'bame' },
{ id: 36, img: 'images/charlie-brooker.png', desc: "Charlie Brooker", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 37, img: 'images/charlie-higson.png', desc: "Charlie Higson", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 38, img: 'images/chloe-petts.png', desc: "Chloe Petts", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 39, img: 'images/chris-addison.png', desc: "Chris Addison", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 40, img: 'images/chris-martin.png', desc: "Chris Martin", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 41, img: 'images/chris-mccausland.png', desc: "Chris McCausland", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 42, img: 'images/chris-odowd.png', desc: "Chris O\'Dowd", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 43, img: 'images/colin-lane.png', desc: "Colin Lane", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 44, img: 'images/craig-campbell.png', desc: "Craig Campbell", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 45, img: 'images/dan-tiernan.png', desc: "Dan Tiernan", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 46, img: 'images/dana-alexander.png', desc: "Dana Alexander", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 47, img: 'images/darren-harriott.png', desc: "Darren Harriott", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 48, img: 'images/david-mitchell.png', desc: "David Mitchell", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 49, img: 'images/david-odoherty.png', desc: "David O\'Doherty", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 50, img: 'images/deborah-frances-white.png', desc: "Deborah Frances-White", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 51, img: 'images/deirdre-okane.png', desc: "Deirdre O\'Kane", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 52, img: 'images/diane-morgan.png', desc: "Diane Morgan", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 53, img: 'images/dom-joly.png', desc: "Dom Joly", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 54, img: 'images/doon-mackichan.png', desc: "Doon Mackichan", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 55, img: 'images/dylan-moran.png', desc: "Dylan Moran", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 56, img: 'images/ed-byrne.png', desc: "Ed Byrne", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 57, img: 'images/eddie-izzard.png', desc: "Eddie Izzard", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 58, img: 'images/eddie-kadi.png', desc: "Eddie Kadi", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 59, img: 'images/elis-james.png', desc: "Elis James", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 60, img: 'images/ellie-taylor.png', desc: "Ellie Taylor", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 61, img: 'images/ellie-white.png', desc: "Ellie White", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 62, img: 'images/emmanuel-sonubi.png', desc: "Emmanuel Sonubi", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 63, img: 'images/eshaan-akbar.png', desc: "Eshaan Akbar", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 64, img: 'images/esther-manito.png', desc: "Esther Manito", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 65, img: 'images/evelyn-mok.png', desc: "Evelyn Mok", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 66, img: 'images/fatiha-el-ghorri.png', desc: "Fatiha El-Ghorri", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 67, img: 'images/felicity-ward.png', desc: "Felicity Ward", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 68, img: 'images/fiona-allen.png', desc: "Fiona Allen", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 69, img: 'images/fred-macaulay.png', desc: "Fred MacAulay", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 70, img: 'images/gemma-whelan.png', desc: "Gemma Whelan", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 71, img: 'images/geoff-norcott.png', desc: "Geoff Norcott", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 72, img: 'images/gina-yashere.png', desc: "Gina Yashere", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'bame' },
{ id: 73, img: 'images/glenn-moore.png', desc: "Glenn Moore", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 74, img: 'images/greg-proops.png', desc: "Greg Proops", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 75, img: 'images/hal-cruttenden.png', desc: "Hal Cruttenden", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 76, img: 'images/hannah-gadsby.png', desc: "Hannah Gadsby", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 77, img: 'images/hannah-waddingham.png', desc: "Hannah Waddingham", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 78, img: 'images/harriet-kemsley.png', desc: "Harriet Kemsley", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 79, img: 'images/harry-enfield.png', desc: "Harry Enfield", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 80, img: 'images/harry-hill.png', desc: "Harry Hill", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 81, img: 'images/helen-bauer.png', desc: "Helen Bauer", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 82, img: 'images/henning-wehn.png', desc: "Henning Wehn", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 83, img: 'images/holly-walsh.png', desc: "Holly Walsh", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 84, img: 'images/huge-davies.png', desc: "Huge Davies", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 85, img: 'images/ian-stone.png', desc: "Ian Stone", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 86, img: 'images/isy-suttie.png', desc: "Isy Suttie", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 87, img: 'images/jack-carroll.png', desc: "Jack Carroll", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 88, img: 'images/jack-rooke.png', desc: "Jack Rooke", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 89, img: 'images/jack-whitehall.png', desc: "Jack Whitehall", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 90, img: 'images/jake-yapp.png', desc: "Jake Yapp", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 91, img: 'images/jamie-demetriou.png', desc: "Jamie Demetriou", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 92, img: 'images/jamie-macdonald.png', desc: "Jamie MacDonald", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 93, img: 'images/jan-ravens.png', desc: "Jan Ravens", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 94, img: 'images/janine-harouni.png', desc: "Janine Harouni", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 95, img: 'images/jarred-christmas.png', desc: "Jarred Christmas", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 96, img: 'images/jason-byrne.png', desc: "Jason Byrne", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 97, img: 'images/jason-forbes.png', desc: "Jason Forbes", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 98, img: 'images/jason-manford.png', desc: "Jason Manford", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 99, img: 'images/jayde-adams.png', desc: "Jayde Adams", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 100, img: 'images/jen-brister.png', desc: "Jen Brister", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 101, img: 'images/jessica-fostekew.png', desc: "Jessica Fostekew", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 102, img: 'images/jessica-hynes.png', desc: "Jessica Hynes", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 103, img: 'images/jessie-cave.png', desc: "Jessie Cave", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 104, img: 'images/jim-howick.png', desc: "Jim Howick", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 105, img: 'images/jim-moir.png', desc: "Jim Moir", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 106, img: 'images/jin-hao-li.png', desc: "Jin Hao Li", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 107, img: 'images/jo-caulfield.png', desc: "Jo Caulfield", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 108, img: 'images/jo-enright.png', desc: "Jo Enright", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 109, img: 'images/joe-pasquale.png', desc: "Joe Pasquale", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 110, img: 'images/joe-sutherland.png', desc: "Joe Sutherland", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 111, img: 'images/john-finnemore.png', desc: "John Finnemore", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 112, img: 'images/john-thomson.png', desc: "John Thomson", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 113, img: 'images/jonathan-ross.png', desc: "Jonathan Ross", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 114, img: 'images/jonny-pelham.png', desc: "Jonny Pelham", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 115, img: 'images/jordan-gray.png', desc: "Jordan Gray", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 116, img: 'images/josh-howie.png', desc: "Josh Howie", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 117, img: 'images/josh-pugh.png', desc: "Josh Pugh", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 118, img: 'images/josie-lawrence.png', desc: "Josie Lawrence", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 119, img: 'images/josie-long.png', desc: "Josie Long", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 120, img: 'images/julia-davis.png', desc: "Julia Davis", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 121, img: 'images/julia-zemiro.png', desc: "Julia Zemiro", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 122, img: 'images/julian-barratt.png', desc: "Julian Barratt", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 123, img: 'images/justin-moorhouse.png', desc: "Justin Moorhouse", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
    // Add more items here
];

let currentPair = [];

// Function to get a new random item that is not dismissed and not in the current pair
function getNewItem(excludeItemId) {
    // Filter out dismissed items and the item to exclude
    let availableItems = items.filter(item => !item.dismissed && item.id !== excludeItemId);

    // First, try to find an item that has not been voted on
    let prioritizedItems = availableItems.filter(item => !item.voted);
    
    // If no such item is found, fall back to any available item
    if (prioritizedItems.length > 0) {
        availableItems = prioritizedItems;
    }

    const randomIndex = Math.floor(Math.random() * availableItems.length);
    return availableItems[randomIndex];
}

//Function to find out more about an item using Google search
function findOutMore(itemNumber) {
    const item = currentPair[itemNumber - 1];
    const query = encodeURIComponent(`${item.desc} comedian`);
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, '_blank');
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
    let availableItems = items.filter(item => !item.dismissed);

    // First, try to find a pair of items that have not been voted on
    let prioritizedItems = availableItems.filter(item => !item.voted);
    
    // If fewer than 2 items are found, fall back to any available items
    if (prioritizedItems.length >= 2) {
        availableItems = prioritizedItems;
    }

    const shuffled = availableItems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

function vote(itemNumber) {
    currentPair[itemNumber - 1].votes++;
    currentPair[itemNumber - 1].voted = true;
    currentPair[1 - itemNumber].voted = true; // Mark the other item as voted as well
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
