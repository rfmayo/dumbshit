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
{ id: 124, img: 'images/karen-taylor.png', desc: "Karen Taylor", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 125, img: 'images/karl-theobald.png', desc: "Karl Theobald", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 126, img: 'images/katherine-jakeways.png', desc: "Katherine Jakeways", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 127, img: 'images/kathy-burke.png', desc: "Kathy Burke", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 128, img: 'images/katy-brand.png', desc: "Katy Brand", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 129, img: 'images/kayvan-novak.png', desc: "Kayvan Novak", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 130, img: 'images/kemah-bob.png', desc: "Kemah Bob", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'bame' },
{ id: 131, img: 'images/kevin-bridges.png', desc: "Kevin Bridges", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 132, img: 'images/kevin-eldon.png', desc: "Kevin Eldon", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 133, img: 'images/kiri-pritchard-mclean.png', desc: "Kiri Pritchard-McLean", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 134, img: 'images/kulvinder-ghir.png', desc: "Kulvinder Ghir", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 135, img: 'images/lara-ricote.png', desc: "Lara Ricote", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 136, img: 'images/laura-lexx.png', desc: "Laura Lexx", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 137, img: 'images/laura-smyth.png', desc: "Laura Smyth", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 138, img: 'images/laurence-rickard.png', desc: "Laurence Rickard", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 139, img: 'images/lindsey-santoro.png', desc: "Lindsey Santoro", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 140, img: 'images/lloyd-langford.png', desc: "Lloyd Langford", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 141, img: 'images/london-hughes.png', desc: "London Hughes", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 142, img: 'images/louise-young.png', desc: "Louise Young", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'bame' },
{ id: 143, img: 'images/loyiso-gola.png', desc: "Loyiso Gola", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 144, img: 'images/lucy-montgomery.png', desc: "Lucy Montgomery", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 145, img: 'images/lucy-pearman.png', desc: "Lucy Pearman", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 146, img: 'images/lucy-porter.png', desc: "Lucy Porter", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 147, img: 'images/luisa-omielan.png', desc: "Luisa Omielan", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 148, img: 'images/maisie-adam.png', desc: "Maisie Adam", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 149, img: 'images/marc-wootton.png', desc: "Marc Wootton", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 150, img: 'images/marcus-brigstocke.png', desc: "Marcus Brigstocke", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 151, img: 'images/marjolein-robertson.png', desc: "Marjolein Robertson", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 152, img: 'images/mark-gatiss.png', desc: "Mark Gatiss", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 153, img: 'images/mark-heap.png', desc: "Mark Heap", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 154, img: 'images/mark-silcox.png', desc: "Mark Silcox", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 155, img: 'images/mark-simmons.png', desc: "Mark Simmons", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 156, img: 'images/mark-steel.png', desc: "Mark Steel", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 157, img: 'images/mark-williams.png', desc: "Mark Williams", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 158, img: 'images/martha-howe-douglas.png', desc: "Martha Howe-Douglas", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 159, img: 'images/mat-ewins.png', desc: "Mat Ewins", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 160, img: 'images/mathew-baynton.png', desc: "Mathew Baynton", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 161, img: 'images/matt-berry.png', desc: "Matt Berry", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 162, img: 'images/matt-forde.png', desc: "Matt Forde", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 163, img: 'images/matthew-crosby.png', desc: "Matthew Crosby", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 164, img: 'images/matthew-holness.png', desc: "Matthew Holness", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 165, img: 'images/meera-syal.png', desc: "Meera Syal", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 166, img: 'images/michael-spicer.png', desc: "Michael Spicer", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 167, img: 'images/miles-jupp.png', desc: "Miles Jupp", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 168, img: 'images/milton-jones.png', desc: "Milton Jones", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 169, img: 'images/mo-gilligan.png', desc: "Mo Gilligan", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 170, img: 'images/nabil-abdulrashid.png', desc: "Nabil Abdulrashid", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 171, img: 'images/natasia-demetriou.png', desc: "Natasia Demetriou", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 172, img: 'images/nathan-caton.png', desc: "Nathan Caton", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 173, img: 'images/neil-mullarkey.png', desc: "Neil Mullarkey", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 174, img: 'images/nick-frost.png', desc: "Nick Frost", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 175, img: 'images/nick-helm.png', desc: "Nick Helm", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 176, img: 'images/nigel-ng.png', desc: "Nigel Ng", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 177, img: 'images/nina-conti.png', desc: "Nina Conti", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 178, img: 'images/nina-wadia.png', desc: "Nina Wadia", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 179, img: 'images/ninia-benjamin.png', desc: "Ninia Benjamin", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 180, img: 'images/olga-koch.png', desc: "Olga Koch", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 181, img: 'images/olivia-lee.png', desc: "Olivia Lee", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 182, img: 'images/omid-djalili.png', desc: "Omid Djalili", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 183, img: 'images/paul-foot.png', desc: "Paul Foot", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 184, img: 'images/paul-whitehouse.png', desc: "Paul Whitehouse", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 185, img: 'images/peter-serafinowicz.png', desc: "Peter Serafinowicz", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 186, img: 'images/phil-cornwell.png', desc: "Phil Cornwell", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 187, img: 'images/phil-kay.png', desc: "Phil Kay", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 188, img: 'images/pierre-novellie.png', desc: "Pierre Novellie", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 189, img: 'images/pippa-evans.png', desc: "Pippa Evans", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 190, img: 'images/rachel-fairburn.png', desc: "Rachel Fairburn", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 191, img: 'images/rachel-parris.png', desc: "Rachel Parris", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 192, img: 'images/ray-badran.png', desc: "Ray Badran", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 193, img: 'images/rebecca-front.png', desc: "Rebecca Front", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 194, img: 'images/reece-shearsmith.png', desc: "Reece Shearsmith", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 195, img: 'images/reginald-d.-hunter.png', desc: "Reginald D. Hunter", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 196, img: 'images/rhys-james.png', desc: "Rhys James", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 197, img: 'images/rhys-thomas.png', desc: "Rhys Thomas", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 198, img: 'images/ria-lina.png', desc: "Ria Lina", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 199, img: 'images/rich-hall.png', desc: "Rich Hall", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 200, img: 'images/richard-ayoade.png', desc: "Richard Ayoade", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 201, img: 'images/rob-brydon.png', desc: "Rob Brydon", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 202, img: 'images/rob-carter.png', desc: "Rob Carter", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 203, img: 'images/rob-delaney.png', desc: "Rob Delaney", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 204, img: 'images/rob-newman.png', desc: "Rob Newman", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 205, img: 'images/robin-ince.png', desc: "Robin Ince", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 206, img: 'images/ross-noble.png', desc: "Ross Noble", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 207, img: 'images/russell-kane.png', desc: "Russell Kane", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 208, img: 'images/sam-simmons.png', desc: "Sam Simmons", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 209, img: 'images/sandi-toksvig.png', desc: "Sandi Toksvig", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 210, img: 'images/sanjeev-bhaskar.png', desc: "Sanjeev Bhaskar", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 211, img: 'images/sara-barron.png', desc: "Sara Barron", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 212, img: 'images/sarah-keyworth.png', desc: "Sarah Keyworth", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 213, img: 'images/shappi-khorsandi.png', desc: "Shappi Khorsandi", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'bame' },
{ id: 214, img: 'images/sharon-horgan.png', desc: "Sharon Horgan", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 215, img: 'images/sharon-wanjohi.png', desc: "Sharon Wanjohi", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 216, img: 'images/simon-amstell.png', desc: "Simon Amstell", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 217, img: 'images/simon-day.png', desc: "Simon Day", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 218, img: 'images/simon-evans.png', desc: "Simon Evans", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 219, img: 'images/simon-farnaby.png', desc: "Simon Farnaby", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 220, img: 'images/simon-pegg.png', desc: "Simon Pegg", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 221, img: 'images/sindhu-vee.png', desc: "Sindhu Vee", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 222, img: 'images/spencer-jones.png', desc: "Spencer Jones", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 223, img: 'images/stephen-bailey.png', desc: "Stephen Bailey", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 224, img: 'images/stephen-k.-amos.png', desc: "Stephen K. Amos", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'bame' },
{ id: 225, img: 'images/stephen-mangan.png', desc: "Stephen Mangan", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 226, img: 'images/stephen-merchant.png', desc: "Stephen Merchant", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 227, img: 'images/stuart-goldsmith.png', desc: "Stuart Goldsmith", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 228, img: 'images/sunil-patel.png', desc: "Sunil Patel", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 229, img: 'images/susan-calman.png', desc: "Susan Calman", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 230, img: 'images/suzi-ruffell.png', desc: "Suzi Ruffell", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
{ id: 231, img: 'images/tamsin-grieg.png', desc: "Tamsin Grieg", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 232, img: 'images/tessa-coates.png', desc: "Tessa Coates", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 233, img: 'images/thanyia-moore.png', desc: "Thanyia Moore", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'bame' },
{ id: 234, img: 'images/tiff-stevenson.png', desc: "Tiff Stevenson", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 235, img: 'images/tom-allen.png', desc: "Tom Allen", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'queer', race: 'white' },
{ id: 236, img: 'images/tom-bell.png', desc: "Tom Bell", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 237, img: 'images/tom-davis.png', desc: "Tom Davis", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 238, img: 'images/tom-rosenthal.png', desc: "Tom Rosenthal", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 239, img: 'images/tom-stade.png', desc: "Tom Stade", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 240, img: 'images/tom-walker.png', desc: "Tom Walker", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 241, img: 'images/tom-ward.png', desc: "Tom Ward", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 242, img: 'images/tom-wrigglesworth.png', desc: "Tom Wrigglesworth", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 243, img: 'images/tommy-tiernan.png', desc: "Tommy Tiernan", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 244, img: 'images/tony-law.png', desc: "Tony Law", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 245, img: 'images/toussaint-douglass.png', desc: "Toussaint Douglass", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'bame' },
{ id: 246, img: 'images/tracy-ann-oberman.png', desc: "Tracy-Ann Oberman", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'straight', race: 'white' },
{ id: 247, img: 'images/will-duggan.png', desc: "Will Duggan", votes: 0, dismissed: false, voted: false, gender: 'male', sexuality: 'straight', race: 'white' },
{ id: 248, img: 'images/zoe-lyons.png', desc: "Zoe Lyons", votes: 0, dismissed: false, voted: false, gender: 'non-male', sexuality: 'queer', race: 'white' },
    // Add more items here with their respective properties
];

let currentPair = [];

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

function getNewItem(excludeItemId) {
    let availableItems = items.filter(item => !item.dismissed && item.id !== excludeItemId);

    let prioritizedItems = availableItems.filter(item => !item.voted);
    
    if (prioritizedItems.length > 0) {
        availableItems = prioritizedItems;
    }

    const randomIndex = Math.floor(Math.random() * availableItems.length);
    return availableItems[randomIndex];
}

function getRandomPair() {
    let availableItems = items.filter(item => !item.dismissed);

    let prioritizedItems = availableItems.filter(item => !item.voted);
    
    if (prioritizedItems.length >= 2) {
        availableItems = prioritizedItems;
    }

    const shuffled = availableItems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

function vote(itemNumber) {
    currentPair[itemNumber - 1].votes++;
    currentPair[itemNumber - 1].voted = true;
    displayItems(itemNumber - 1); // Call displayItems with the index of the voted item
    displayRankings();
}

function dismiss(itemNumber) {
    currentPair[itemNumber - 1].dismissed = true;
    displayItems(itemNumber - 1);
}

function findOutMore(itemNumber) {
    const item = currentPair[itemNumber - 1];
    const query = encodeURIComponent(`${item.desc} information`);
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, '_blank');
}

function displayRankings() {
    // Create arrays for each characteristic
    const nonmaleItems = items.filter(item => item.gender === 'non-male' && !item.dismissed).sort((a, b) => b.votes - a.votes);
    const queerItems = items.filter(item => item.sexuality === 'queer' && !item.dismissed).sort((a, b) => b.votes - a.votes);
    const bameItems = items.filter(item => item.race === 'bame' && !item.dismissed).sort((a, b) => b.votes - a.votes);
    const otherItems = items.filter(item => !item.dismissed).sort((a, b) => b.votes - a.votes);

    let selectedItems = [];
    let addedItems = new Set();

    // Add at least 2 women
    for (let i = 0; i < nonmaleItems.length && selectedItems.length < 2; i++) {
        if (!addedItems.has(nonmaleItems[i].id)) {
            selectedItems.push(nonmaleItems[i]);
            addedItems.add(nonmaleItems[i].id);
        }
    }

    // Add at least 1 queer person
    for (let i = 0; i < queerItems.length && selectedItems.length < 3; i++) {
        if (!addedItems.has(queerItems[i].id)) {
            selectedItems.push(queerItems[i]);
            addedItems.add(queerItems[i].id);
        }
    }

    // Add at least 1 BAME person
    for (let i = 0; i < bameItems.length && selectedItems.length < 4; i++) {
        if (!addedItems.has(bameItems[i].id)) {
            selectedItems.push(bameItems[i]);
            addedItems.add(bameItems[i].id);
        }
    }

    // Fill the remaining slots with the most popular items
    for (let i = 0; i < otherItems.length && selectedItems.length < 5; i++) {
        if (!addedItems.has(otherItems[i].id)) {
            selectedItems.push(otherItems[i]);
            addedItems.add(otherItems[i].id);
        }
    }

    // Sort the selected items alphabetically by description
   selectedItems.sort((a, b) => a.desc.localeCompare(b.desc));

    let rankingsHTML = '<h2>Top 5 Items</h2><div class="top-items">';
    selectedItems.forEach(item => {
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
