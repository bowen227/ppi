////////////////////////////////////////////////
/////// ASSOCIATION.HTML FUNCTIONS BELOW ///////

// ARRAY OF PLAYERS
let players = []
let players_group_one = []
let players_group_two = []
let players_group_three = []
let players_group_four = []

// ARRAY OF NAMES TO CREATE PLAYERS FOR PLAYER ARRAY
const firstNames = ['Tom', 'Easton', 'Max', 'Leigh', 'Samuel', 'Doug', 'Peter', 'Bradley', 'Chad', 'Charles']
const lastNames = ['Owen', 'Golliher', 'Spears', 'Martin', 'Manning', 'Wells', 'Sokohl', 'Reece', 'Smith', 'Coulter']
const positions = ['Infield', 'Outfield']
const groups = ['6u', '8u', '10u', '12u']

// TEAM PLAYER POWER INDEX
let teamPPI = 0

// COACH OBJ
let coach = {
    firstName: 'Ron',
    lastName: 'Diggity'
}

// TEAM NAME
let team = null

// GET GROUP LIST ELEMENT FROM DOM
let gList = document.getElementById("group-headings")

// GET PLAYER LIST ELEMENT FROM DOM
let pList = document.getElementById("player-list")

// SEARCH GROUP
let searchGroup = 'All'

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
            PPI: parseFloat((Math.random() / 100 * 5) * 100).toFixed(2),
            profileImg: null
        }

        players.push(p)
    }
    
    groupPlayers()
}

createPlayers()

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
    // console.log(players_group_one)
    // console.log(players_group_two)
    // console.log(players_group_three)
    // console.log(players_group_four)
}

function displayGroups() {
    groups.forEach(g => {
        gList.innerHTML += `
        <button class="btn btn-outline-dark groupBtn" onclick="displayPlayers(this)">${g}</button>
        `
    })
}

displayGroups()

function displayPlayers(searchGroup) {

    if (pList.innerHTML.length > 0) {
        while (pList.firstChild) {
            pList.removeChild(pList.firstChild)
        }
    }

    if (searchGroup.innerHTML == 'All') {
        players.forEach(p => {
            pList.innerHTML += `
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName} ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col">
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
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName} ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col">
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
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName} ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col">
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
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName} ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col">
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
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${p.profileImg ? p.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${p.fName} ${p.lName}
                    </div>
                    <div class="col">
                        ${p.group}
                    </div>
                    <div class="col">
                        ${p.PPI}
                    </div>
                </div>
            </li>
            `
        })
    }
}

function searchPlayer() {
    const searchTerm = document.getElementById('searchPlayer')

    if (pList.innerHTML.length > 0) {
        while (pList.firstChild) {
            pList.removeChild(pList.firstChild)
        }
    }

    for (let index = 0; index < players.length; index++) {
        const element = players[index];

        const name = `${element.fName} ${element.lName}`
        
        if (name.toLowerCase().includes(searchTerm.value.toLowerCase())) {
            pList.innerHTML += `
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col">
                        <img width="50px" height="auto" src=${element.profileImg ? element.profileImg : "../img/default_user.png"} />
                    </div>
                    <div class="col">
                        ${element.fName} ${element.lName}
                    </div>
                    <div class="col">
                        ${element.group}
                    </div>
                    <div class="col">
                        ${element.PPI}
                    </div>
                </div>
            </li>
            `
        }
    }
}