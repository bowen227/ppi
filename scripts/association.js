////////////////////////////////////////////////
/////// ASSOCIATION.HTML FUNCTIONS BELOW ///////

// Create coach class
function Coach(firstName, lastName, isHead) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isHead = isHead;
}

// Create player class
function Player(firstName, lastName, group, throws, bats) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.throws = throws;
    this.bats = bats;
    this.team = 'undrafted';

    this.renderPlayer = function() {
        return `<li class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
                    <div class="row align-items-center">
                        <div class="col">
                            <img width="50px" height="auto" src="../img/default_user.png" />
                        </div>
                        <div class="col">
                            ${firstName}
                        </div>
                        <div class="col d-none d-md-block align-self-center">
                            ${lastName}
                        </div>
                        <div class="col">
                            ${group}
                        </div>
                        <div class="col d-none d-md-block align-self-center">
                            ${throws}
                        </div>
                        <div class="col d-none d-md-block align-self-center">
                            ${bats}
                        </div>
                    </div>
                </li>`
    }
}

// ARRAY OF COACHES
let coaches = []

// ARRAY OF PLAYERS
let players = []
let players_group_one = []
let players_group_two = []
let players_group_three = []
let players_group_four = []

// ARRAY OF NAMES TO CREATE PLAYERS AND COACHES
const firstNames = ['Tom', 'Easton', 'Max', 'Leigh', 'Samuel', 'Doug', 'Peter', 'Bradley', 'Chad', 'Charles']
const lastNames = ['Owen', 'Golliher', 'Spears', 'Martin', 'Manning', 'Wells', 'Sokohl', 'Reece', 'Smith', 'Coulter']
const positions = ['Infield', 'Outfield']
const groups = ['6u', '8u', '10u', '12u']
const batsWith = ['right', 'left', 'switch']
const throwsWith = ['right', 'left']
const type = ['head', 'assistant']

// GET GROUP LIST ELEMENT FROM DOM
let gList = document.getElementById("group-headings")

// GET PLAYER LIST ELEMENT FROM DOM
let pList = document.getElementById("player-list")

// SEARCH GROUP
let searchGroup = 'All'


// CHECK FOR COACHES AND PLAYERS IN LOCAL STORAGE IF NONE CREATE THEM
// Not using due to can't store renderPlayer method in localstorage skipped for now
// function checkForData() {
//     const sCoaches = localStorage.getItem("coaches")
//     const sPlayers = localStorage.getItem("players")

//     if (sCoaches) {
//         const storedCoaches = JSON.parse(sCoaches)
//         coaches = storedCoaches
//     } else {
//         for (let i = 0; i < 10; i++) {
//             let cIndex = Math.floor(Math.random() * 10)

//             const c = new Coach(firstNames[cIndex], lastNames[cIndex], false);
    
//             coaches.push(c)
//         }
//         localStorage.setItem('coaches', JSON.stringify(coaches))
//     }

//     if (sPlayers) {
//         const storedPlayers = JSON.parse(sPlayers)
//         players = storedPlayers

//         groupPlayers()
//     } else {
//         for (let index = 0; index < 100 ; index++) {
//             const firstNameIndex = Math.floor(Math.random() * 10)
//             const lastNameIndex = Math.floor(Math.random() * 10)
//             const groupIndex = Math.floor(Math.random() * 4)
//             const batsIndex = Math.floor(Math.random() * 3)
//             const throwsIndex = Math.floor(Math.random() * 2)

//             const p = new Player(firstNames[firstNameIndex], lastNames[lastNameIndex], groups[groupIndex], throwsWith[throwsIndex], batsWith[batsIndex]);
            
//             players.push(p)
//         }
//         localStorage.setItem('players', JSON.stringify(players))

//         groupPlayers()
//     }
// }

// Create random coaches and players
function createRandoms() {
    for (let index = 0; index < 100 ; index++) {
        const firstNameIndex = Math.floor(Math.random() * 10)
        const lastNameIndex = Math.floor(Math.random() * 10)
        const groupIndex = Math.floor(Math.random() * 4)
        const batsIndex = Math.floor(Math.random() * 3)
        const throwsIndex = Math.floor(Math.random() * 2)

        const p = new Player(firstNames[firstNameIndex], lastNames[lastNameIndex], groups[groupIndex], throwsWith[throwsIndex], batsWith[batsIndex]);
        
        players.push(p)
    }

    for (let i = 0; i < 10; i++) {
        let cIndex = Math.floor(Math.random() * 10)

        const c = new Coach(firstNames[cIndex], lastNames[cIndex], false);

        coaches.push(c)
    }

    groupPlayers()
}

// Sort players
function groupPlayers() {
    players.map(p => {
        switch (p.group) {
            case '6u':
                players_group_one.push(p)
                break;
            
            case '8u':
                players_group_two.push(p)
                break;

            case '10u':
                players_group_three.push(p)
                break;

            case '12u':
                players_group_four.push(p)
                break;

            default:
                break;
        }
    })
}

// Display group buttons
function displayGroups() {
    groups.forEach(g => {
        gList.innerHTML += `
        <button class="btn btn-outline-dark groupBtn" onclick="displayPlayers(this)">${g}</button>
        `
    })
}

// Display grouped players
function displayPlayers(searchGroup) {

    if (pList.innerHTML.length > 0) {
        while (pList.firstChild) {
            pList.removeChild(pList.firstChild)
        }
    }

    if (searchGroup.innerHTML == 'All') {
        players.forEach(p => {
            pList.innerHTML += p.renderPlayer();
        })
    }

    if (searchGroup.innerHTML == '6u') {
        players_group_one.forEach(p => {
            pList.innerHTML += p.renderPlayer();
        })
    }

    if (searchGroup.innerHTML == '8u') {
        players_group_two.forEach(p => {
            pList.innerHTML += p.renderPlayer();
        })
    }

    if (searchGroup.innerHTML == '10u') {
        players_group_three.forEach(p => {
            pList.innerHTML += p.renderPlayer();
        })
    }

    if (searchGroup.innerHTML == '12u') {
        players_group_four.forEach(p => {
            pList.innerHTML += p.renderPlayer();
        })
    }
}

// Search players by first and last name 
function searchPlayer() {
    const searchTerm = document.getElementById('searchPlayer').value.toLowerCase()

    if (pList.innerHTML.length > 0) {
        while (pList.firstChild) {
            pList.removeChild(pList.firstChild)
        }
    }

    for (let index = 0; index < players.length; index++) {
        const element = players[index];

        const name = `${element.firstName} ${element.lastName}`
        
        if (name.toLowerCase().includes(searchTerm)) {
            pList.innerHTML += element.renderPlayer();
        }
    }
}

const one = []
const two = []
const three = []
const four = []
const five = []
const selectedCoaches = []
const selectedPlayers = []

function draftGroupOne() {

    for (let i = 0; i < players_group_one.length; i++) {
        let p = players_group_one[i]
        if (p.PPI < 2) {
            one.push(p)
        } else if (p.PPI >= 2 && p.PPI < 3) {
            two.push(p)
        } else if (p.PPI >= 3 && p.PPI < 4) {
            three.push(p)
        } else if (p.PPI >= 4 && p.PPI < 5) {
            four.push(p)
        } else {
            five.push(p)
        }
    }

    for (let i = 0; i < Math.floor(players_group_one.length / 10); i++) {
        console.log(`Number of Teams ${Math.floor(players_group_one.length / 10)}`)
        selectedCoaches.push(coaches[i])
    }

    for (let i = 0; i < players_group_one.length; i++) {
        for (let x = 0; x < selectedCoaches.length; x++) {
            let c = selectedCoaches[x]

            addPlayerToTeam(c)

        }
    }

    for (let i = 0; i < selectedCoaches.length; i++) {
        let element = selectedCoaches[i]
        const ppis = []
        element.players.forEach(p => {
            ppis.push(parseFloat(p.PPI))
        })
        const sumPPI = ppis.reduce((a, b) => a + b, 0).toFixed(2)
        element.PPI = sumPPI
    }
}

function addPlayerToTeam(c) {
    if (five.length > 0) {
        c.players.push(five[0])
        selectedPlayers.push(five[0])
        five.shift()
    } else if (four.length > 0) {
        c.players.push(four[0])
        selectedPlayers.push(four[0])
        four.shift()
    } else if (three.length > 0) {
        c.players.push(three[0])
        selectedPlayers.push(three[0])
        three.shift()
    } else if (two.length > 0) {
        c.players.push(two[0])
        selectedPlayers.push(two[0])
        two.shift()
    } else if (one.length > 0) {
        c.players.push(one[0])
        selectedPlayers.push(one[0])
        one.shift()
    }
}

// GO TO PLAYERDETAILS.HTML AND SET CURRENT PLAYER
function gotoPlayerDetails(t, e) {
    const profileImg = t.children[0].children[0].children[0].src
    const firstName = t.children[0].children[1].innerHTML
    const lastName = t.children[0].children[2].innerHTML
    const group = t.children[0].children[3].innerHTML
    const throws = t.children[0].children[4].innerHTML
    const bats = t.children[0].children[5].innerHTML

    const selectedPlayer = new Player(firstName, lastName, group, throws, bats);

    document.location.href = `
    playerDetails.html?
    &fName=${selectedPlayer.firstName}
    &lName=${selectedPlayer.lastName}
    &group=${selectedPlayer.group}
    &throws=${selectedPlayer.throws}
    &bats=${selectedPlayer.bats}
    `
}