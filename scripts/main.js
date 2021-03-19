////////////////////////////////////////////////
//////// DASHBOARD.HTML FUNCTIONS BELOW ////////

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

// Create coach class
function Coach(firstName, lastName, isHead) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isHead = isHead;
}

// ARRAY OF PLAYERS
let players = []

// ARRAY OF NAMES TO CREATE PLAYERS FOR PLAYER ARRAY
const firstNames = ['Tom', 'Easton', 'Max', 'Leigh', 'Samuel', 'Doug', 'Peter', 'Bradley', 'Chad', 'Charles']
const lastNames = ['Owen', 'Golliher', 'Spears', 'Martin', 'Manning', 'Wells', 'Sokohl', 'Reece', 'Smith', 'Coulter']
const positions = ['Infield', 'Outfield']
const groups = ['6u', '8u', '10u', '12u']
const batsWith = ['right', 'left', 'switch']
const throwsWith = ['right', 'left']
const type = ['head', 'assistant']

// ARRAY OF EVENTS
const uEvents = [
    {date: "3/15/2021", title: "Season officially start"},
    {date: "3/22/2021", title: "vs Braves"},
    {date: "3/24/2021", title: "vs Yankees"},
    {date: "3/26/2021", title: "vs Bears"},
    {date: "3/28/2021", title: "vs Titans"},
    {date: "4/02/2021", title: "vs Braves"}
]

// TEAM PLAYER POWER INDEX
let teamPPI = 0

// COACH OBJ
let coach = new Coach('Ron', 'Diggity', true)

// TEAM NAME
let team = null

// GET PLAYER LIST ELEMENT FROM DOM
let pList = document.getElementById("playerList")

// CREATE RANDOM PLAYERS
function createPlayers() {
    for (let index = 0; index < firstNames.length; index++) {
        const element = firstNames[index];
        const lastNameIndex = Math.floor(Math.random() * 10)
        const groupIndex = Math.floor(Math.random() * 2)
        const throwsIndex = Math.floor(Math.random() * 2)
        const batsIndex = Math.floor(Math.random() * 3)

        const p = new Player(element, lastNames[lastNameIndex], groups[groupIndex], throwsWith[throwsIndex], batsWith[batsIndex])

        players.push(p)
    }
}

createPlayers()

// DISPLAY THE PLAYERS IN THE DASHBOARD LIST OF PLAYERS
function displayPlayers() {
    players.forEach(element => {
        pList.innerHTML += element.renderPlayer();
    });
}

// DISPLAY COACH NAME
const displayName = document.getElementById('coach-association').children[0]

displayName.innerHTML = `Coach ${coach.lastName} <i class="fa fa-pencil" onclick="updateCoachDetails()"></i>`

// DISPLAY TEAM NAME
const teamName = document.getElementById('coach-association').children[1]

teamName.innerHTML = `${team ? team : `<a href="#" onclick="addTeam()">Add Team Name</a>`}`

// DISPLAY EVENTS
function showEvents() {
    const eDiv = document.getElementById('upcomingEvents')
    const showMore = document.getElementById('moreBtn')

    if (eDiv.innerHTML.length >0) {
        while (eDiv.firstChild) {
            eDiv.removeChild(eDiv.firstChild)
        }
    }

    for (let index = 0; index < 4; index++) {
        const element = uEvents[index];
        eDiv.innerHTML += `
        <li class="list-group-item">
            ${element.date} ${element.title}
        </li>
        `
    }

    showMore.innerHTML = `
    <a href="#" onclick="showAllEvents()">More</a>
    `
}

function showAllEvents() {
    const eDiv = document.getElementById('upcomingEvents')
    const showLess = document.getElementById('moreBtn')

    if (eDiv.innerHTML.length > 0) {
        while (eDiv.firstChild) {
            eDiv.removeChild(eDiv.firstChild)
        }
    }

    for (let index = 0; index < uEvents.length; index++) {
        const element = uEvents[index];
        eDiv.innerHTML += `
        <li class="list-group-item">
            ${element.date} ${element.title}
        </li>
        `
    }

    showLess.innerHTML = `
    <a href="#" onclick="showEvents()">Less</a>
    `
}

// UPDATE COACH DETAILS
function updateCoachDetails() {
    displayName.innerHTML = `
    <input type="text" id="editLastName" placeHolder=${coach.lastName} />
    <button class="btn btn-primary" onclick="updateCoachLastName()">Save</button>
    `
}

function updateCoachLastName() {
    const updatedName = document.getElementById('editLastName').value
    coach.lastName = updatedName

    displayName.innerHTML = `Coach ${coach.lastName} <i class="fa fa-pencil" onclick="updateCoachDetails()"></i>`
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

    const p = new Player(fName.value, lName.value, groups[Math.floor(Math.random() * 2)], throwsWith[Math.floor(Math.random() * 2)], batsWith[Math.floor(Math.random() * 3)])

    players.push(p)

    pList.innerHTML += p.renderPlayer();
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