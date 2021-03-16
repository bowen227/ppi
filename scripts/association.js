////////////////////////////////////////////////
/////// ASSOCIATION.HTML FUNCTIONS BELOW ///////

// PPI API ROUTE
// const PPI_API = 'http://localhost:3000/api'

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
const type = ['head', 'assistant']

// GET GROUP LIST ELEMENT FROM DOM
let gList = document.getElementById("group-headings")

// GET PLAYER LIST ELEMENT FROM DOM
let pList = document.getElementById("player-list")

// SEARCH GROUP
let searchGroup = 'All'

// CREATE RANDOM COACHES
function createCoaches() {
    for (let i = 0; i < 10; i++) {
        let cIndex = Math.floor(Math.random() * 10)
        let aIndex = Math.floor(Math.random() * 10)

        const c = {
            head: {fName: firstNames[cIndex], lName: lastNames[cIndex]},
            assistant: {fName: firstNames[aIndex], lName: lastNames[aIndex]},
            teamName: i,
            players: [],
            PPI: 0
        }

        coaches.push(c)
    }
}

// CREATE RANDOM PLAYERS
function createPlayers() {
    for (let index = 0; index < 100 ; index++) {
        const fistNameIndex = Math.floor(Math.random() * 10)
        const element = firstNames[fistNameIndex];
        const lastNameIndex = Math.floor(Math.random() * 10)
        const groupIndex = Math.floor(Math.random() * 4)
        const pIndex = Math.floor(Math.random() * 2)
        
        const p = {
            fName: element,
            lName: lastNames[lastNameIndex],
            position: positions[pIndex],
            group: groups[groupIndex],
            PPI: ((Math.random() / 100 * 5) * 100).toFixed(2),
            
            profileImg: null
        }

        players.push(p)
    }
    
    groupPlayers()
}

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

function displayGroups() {
    groups.forEach(g => {
        gList.innerHTML += `
        <button class="btn btn-outline-dark groupBtn" onclick="displayPlayers(this)">${g}</button>
        `
    })
}

function displayPlayers(searchGroup) {

    if (pList.innerHTML.length > 0) {
        while (pList.firstChild) {
            pList.removeChild(pList.firstChild)
        }
    }

    if (searchGroup.innerHTML == 'All') {
        players.forEach(p => {
            pList.innerHTML += `
            <li class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.PPI}
                    </div>
                </div>
            </li>
            `
        })
    }

    if (searchGroup.innerHTML == '6u') {
        players_group_one.forEach(p => {
            pList.innerHTML += `
            <li class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.PPI}
                    </div>
                </div>
            </li>
            `
        })
    }

    if (searchGroup.innerHTML == '8u') {
        players_group_two.forEach(p => {
            pList.innerHTML += `
            <li class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.PPI}
                    </div>
                </div>
            </li>
            `
        })
    }

    if (searchGroup.innerHTML == '10u') {
        players_group_three.forEach(p => {
            pList.innerHTML += `
            <li class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.PPI}
                    </div>
                </div>
            </li>
            `
        })
    }

    if (searchGroup.innerHTML == '12u') {
        players_group_four.forEach(p => {
            pList.innerHTML += `
            <li class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${p.PPI}
                    </div>
                </div>
            </li>
            `
        })
    }
}

function searchPlayer() {
    const searchTerm = document.getElementById('searchPlayer').value.toLowerCase()

    if (pList.innerHTML.length > 0) {
        while (pList.firstChild) {
            pList.removeChild(pList.firstChild)
        }
    }

    for (let index = 0; index < players.length; index++) {
        const element = players[index];

        const name = `${element.fName} ${element.lName}`
        
        if (name.toLowerCase().includes(searchTerm)) {
            pList.innerHTML += `
            <li class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${element.profileImg ? element.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${element.fName}
                    </div>
                    <div class="col">
                        ${element.lName}
                    </div>
                    <div class="col">
                        ${element.group}
                    </div>
                    <div class="col d-none d-md-block align-self-center">
                        ${element.PPI}
                    </div>
                </div>
            </li>
            `
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
// function gotoPlayerDetails(t, e) {
//     const profileImg = t.children[0].children[0].children[0].src
//     const firstName = t.children[0].children[1].innerHTML
//     const lastName = t.children[0].children[2].innerHTML
//     const position = t.children[0].children[3].innerHTML
//     const PPI = t.children[0].children[4].innerHTML

//     const sPlayer = {
//         profileImg: profileImg,
//         fName: firstName.trim(),
//         lName: lastName.trim(),
//         position: position.trim(),
//         PPI: PPI.trim()
//     }

//     selectedPlayer = sPlayer

//     document.location.href = `
//     playerDetails.html?img=${selectedPlayer.profileImg}
//     &fName=${selectedPlayer.fName}
//     &lName=${selectedPlayer.lName}
//     &position=${selectedPlayer.position}
//     &ppi=${selectedPlayer.PPI}
//     `
// }