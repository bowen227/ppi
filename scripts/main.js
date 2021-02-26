////////////////////////////////////////////////
///////// SIGNUP.HTML FUNCTIONS BELOW /////////

// SIGNUP ASSOCIATION
function createAssociation() {
    console.log("Create association")
}


////////////////////////////////////////////////
///////// LOGIN.HTML FUNCTIONS BELOW /////////

// SIGNUP COACH
function createCoach() {
    console.log("Create coach")
}


////////////////////////////////////////////////
//////// DASHBOARD.HTML FUNCTIONS BELOW ////////

// ARRAY OF PLAYERS
let players = []

// ARRAY OF NAMES TO CREATE PLAYERS FOR PLAYER ARRAY
const firstNames = ['Tom', 'Easton', 'Max', 'Leigh', 'Samuel', 'Doug', 'Peter', 'Bradley', 'Chad', 'Charles']
const lastNames = ['Owen', 'Golliher', 'Spears', 'Martin', 'Manning', 'Wells', 'Sokohl', 'Reece', 'Smith', 'Coulter']
const positions = ['Infield', 'Outfield']

// TEAM PLAYER POWER INDEX
let teamPPI = 0

// COACH OBJ
let coach = {
    firstName: 'Ron',
    lastName: 'Diggity'
}

// TEAM NAME
let team = null

// GET PLAYER LIST ELEMENT FROM DOM
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
            PPI: parseFloat((Math.random() / 100 * 5) * 100).toFixed(2),
            profileImg: null
        }

        players.push(p)
    }
}

createPlayers()

// DISPLAY THE PLAYERS IN THE DASHBOARD LIST OF PLAYERS
function displayPlayers() {
    players.forEach(element => {
        pList.innerHTML += `
        <li id="list-item" class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
            <div class="row">
                <div class="col">
                    ${element.profileImg ? element.profileImg : `<img src="../img/default_user.png" width="40" height="40" />`}
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

// DISPLAY COACH NAME
const displayName = document.getElementById('coach-association').children[0]

displayName.innerHTML = `Coach ${coach.lastName}`

// DISPLAY TEAM NAME
const teamName = document.getElementById('coach-association').children[1]

teamName.innerHTML = `${team ? team : `<a href="#" onclick="addTeam()">Add Team Name</a>`}`

// UPDATE COACH DETAILS
function updateCoachDetails() {
    const fName = document.getElementById('firstName')
    const lName = document.getElementById('lastName')

    coach = {
        firstName: fName.value,
        lastName: lName.value
    }
}

// ADD TEAM NAME
function addTeam() {
    teamName.innerHTML = `
    <div>
        <input id="tName" type="text" />
        <button class="btn btn-primary" onclick="saveTeamName(tName.value)">Save</button>
    </div>
    `
}

function saveTeamName(t) {
    team = t
    teamName.innerHTML = `${t}`
}

// ADD NEW PLAYER
function addPlayer() {
    const fName = document.getElementById('pFirstName')
    const lName = document.getElementById('pLastName')
    const pIndex = Math.floor(Math.random() * 2)

    const p = {
        fName: fName.value,
        lName: lName.value,
        position: positions[pIndex],
        PPI: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
        profileImg: null,
        attitude: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
        coach_comment: null
    }

    players.push(p)

    pList.innerHTML += `
    <li id="list-item" class="list-group-item player" onclick="gotoPlayerDetails(this, event)">
        <div class="row">
            <div class="col">
                <img src=${p.profileImg ? p.profileImg : `../img/default_user.png`} width="40" height="40" />
            </div>
            <div class="col d-none d-md-block align-self-center">
                ${p.fName}
            </div>
            <div class="col align-self-center">
                ${p.lName}
            </div>
            <div class="col d-none d-md-block align-self-center">
                ${p.position}
            </div>
            <div class="col align-self-center">
                ${p.PPI}
            </div>
        </div>
    </li>
    `
}

// ADD NEW ADMIN
function addAdmin() {
    const a = {
        fName: document.getElementById('aFirstName').value,
        lName: document.getElementById('aLastName').value,
        profileImg: null
    }

    console.log(a)
}

// ADD NEW COACH
function addCoach() {
    const c = {
        fName: document.getElementById('cFirstName').value,
        lName: document.getElementById('cLastName').value
    }

    console.log(c)

}

// GO TO PLAYERDETAILS.HTML AND SET CURRENT PLAYER
function gotoPlayerDetails(t, e) {
    const profileImg = t.children[0].children[0].children[0].src
    const firstName = t.children[0].children[1].innerHTML
    const lastName = t.children[0].children[2].innerHTML
    const position = t.children[0].children[3].innerHTML
    const PPI = t.children[0].children[4].innerHTML

    const sPlayer = {
        profileImg: profileImg,
        fName: firstName.trim(),
        lName: lastName.trim(),
        position: position.trim(),
        PPI: PPI.trim()
    }

    selectedPlayer = sPlayer

    document.location.href = `
    playerDetails.html?img=${selectedPlayer.profileImg}
    &fName=${selectedPlayer.fName}
    &lName=${selectedPlayer.lName}
    &position=${selectedPlayer.position}
    &ppi=${selectedPlayer.PPI}
    `
}


////////////////////////////////////////////////
///////// SETTINGS.HTML FUNCTIONS BELOW ////////

// OPEN SETTING MENU
function openSettings() {
    console.log('Open settings')
}

// UPLOAD COACH PROFILE IMAGE
function uploadCoachProfileImg() {
    console.log('Coach profile img')
}