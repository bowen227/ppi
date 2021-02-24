// ARRAY OF PLAYERS
let players = []

// ARRAY OF NAMES TO CREATE PLAYERS FOR PLAYER ARRAY
const firstNames = ['Tom', 'Easton', 'Max', 'Leigh', 'Samuel', 'Doug', 'Peter', 'Bradley', 'Chad', 'Charles']
const lastNames = ['Owen', 'Golliher', 'Spears', 'Martin', 'Manning', 'Wells', 'Sokohl', 'Reece', 'Smith', 'Coulter']
const positions = ['Infield', 'Outfield']
let teamPPI = 0
let pList = document.getElementById("playerList")

// CREATE RANDOM PLAYERS
function createPlayers() {
    for (let index = 0; index < firstNames.length; index++) {
        const element = firstNames[index];
        const lastNameIndex = Math.floor(Math.random() * 10)
        const pIndex = Math.floor(Math.random() * 2)
        
        const p = {
            fName: element,
            lName: lastNames[lastNameIndex],
            position: positions[pIndex],
            PPI: parseFloat((Math.random() / 100 * 5) * 100).toFixed(2)
        }

        players.push(p)
    }
}

createPlayers()

// DISPLAY THE PLAYERS IN THE DASHBOARD LIST OF PLAYERS
function displayPlayers() {
    players.forEach(element => {
        pList.innerHTML += `
        <li id="list-item" class="list-group-item player">
            <div class="row">
                <div class="col">
                    <img src="img/default_user.png" width="40" height="40" />
                </div>
                <div class="col d-none d-md-block align-self-center">
                    ${element.fName}
                </div>
                <div class="col align-self-center">
                    ${element.lName}
                </div>
                <div class="col d-none d-md-block align-self-center">
                    ${element.position}
                </div>
                <div class="col align-self-center">
                    ${element.PPI}
                </div>
            </div>
        </li>
        `
    });
}

displayPlayers()

// ADD NEW PLAYER
function addPlayer() {
    console.log('Add new player')
}

// ADD NEW ADMIN
function addAdmin() {
    console.log('Add new admin')
}

// ADD NEW COACH
function addCoach() {
    console.log('Add new coach')
}

// OPEN SETTING MENU
function openSettings() {
    console.log('Open settings')
}
