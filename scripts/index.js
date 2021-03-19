// Moving all logic to single file

// Create Player class
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

// Create Coach class
function Coach(firstName, lastName, isHead) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isHead = isHead;
}

// Array of coaches
const coaches = []
// Array of players
const players = []

// Arrays of grouped players
const players_group_one = []
const players_group_two = []
const players_group_three = []
const players_group_four = []

// Arrays to create random player/coach objects
const firstNames = ['Tom', 'Easton', 'Max', 'Leigh', 'Samuel', 'Doug', 'Peter', 'Bradley', 'Chad', 'Charles']
const lastNames = ['Owen', 'Golliher', 'Spears', 'Martin', 'Manning', 'Wells', 'Sokohl', 'Reece', 'Smith', 'Coulter']
const positions = ['Infield', 'Outfield']
const groups = ['6u', '8u', '10u', '12u']
const batsWith = ['right', 'left', 'switch']
const throwsWith = ['right', 'left']
const type = ['head', 'assistant']

// Array of random events
const uEvents = [
    {date: "3/15/2021", title: "Season officially start"},
    {date: "3/22/2021", title: "vs Braves"},
    {date: "3/24/2021", title: "vs Yankees"},
    {date: "3/26/2021", title: "vs Bears"},
    {date: "3/28/2021", title: "vs Titans"},
    {date: "4/02/2021", title: "vs Braves"}
]

// Get group list element from DOM
const gList = document.getElementById("group-headings")

// Get player list element from DOM - association.html
const aPlayerList = document.getElementById("player-list")

// Get player list element from DOM - dashboard.html
const dPlayerList = document.getElementById("playerList")

// Selected player group
let selectedGroup = 'All'

// Set current coach
let coach = new Coach('Ron', 'Diggity', true)

// Set team
let team = null

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

// Sort players - association.html
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

// Display group buttons - association.html
function displayGroups() {
    groups.forEach(g => {
        gList.innerHTML += `
        <button class="btn btn-outline-dark groupBtn" onclick="displayGroupedPlayers(this)">${g}</button>
        `
    })
}

// Display grouped players - association.html
function displayGroupedPlayers(selectedGroup) {

    if (aPlayerList.innerText.length > 0) {
        while (aPlayerList.firstChild) {
            aPlayerList.removeChild(aPlayerList.firstChild)
        }
    }

    if (selectedGroup.innerHTML == 'All') {
        players.forEach(p => {
            aPlayerList.innerHTML += p.renderPlayer();
        })
    }

    if (selectedGroup.innerHTML == '6u') {
        players_group_one.forEach(p => {
            aPlayerList.innerHTML += p.renderPlayer();
        })
    }

    if (selectedGroup.innerHTML == '8u') {
        players_group_two.forEach(p => {
            aPlayerList.innerHTML += p.renderPlayer();
        })
    }

    if (selectedGroup.innerHTML == '10u') {
        players_group_three.forEach(p => {
            aPlayerList.innerHTML += p.renderPlayer();
        })
    }

    if (selectedGroup.innerHTML == '12u') {
        players_group_four.forEach(p => {
            aPlayerList.innerHTML += p.renderPlayer();
        })
    }
}

// Search players by first and last name 
function searchPlayer() {
    const searchTerm = document.getElementById('searchPlayer').value.toLowerCase()

    if (aPlayerList.innerText.length > 0) {
        while (aPlayerList.firstChild) {
            aPlayerList.removeChild(aPlayerList.firstChild)
        }
    }

    for (let index = 0; index < players.length; index++) {
        const element = players[index];

        const name = `${element.firstName} ${element.lastName}`
        
        if (name.toLowerCase().includes(searchTerm)) {
            aPlayerList.innerHTML += element.renderPlayer();
        }
    }
}

// Display players - dashboard.html
function displayPlayers() {
    players.forEach(element => {
        if (element.group == '6u') {
            dPlayerList.innerHTML += element.renderPlayer();
        }
    });
}

// Display coach in the DOM if location = dashboard.html
function displayCoach() {
    const displayName = document.getElementById('coach-association').children[0]
    displayName.innerHTML = `Coach ${coach.lastName} <i class="fa fa-pencil" onclick="updateCoachDetails()"></i>`
    
    const teamName = document.getElementById('coach-association').children[1]
    teamName.innerHTML = `${team ? team : `<a href="#" onclick="addTeam()">Add Team Name</a>`}`
}

// Update coach details
function updateCoachDetails() {
    displayName.innerHTML = `
    <input type="text" id="editLastName" placeHolder=${coach.lastName} />
    <button class="btn btn-primary" onclick="updateCoachLastName()">Save</button>
    `
}

// Update coach last name
function updateCoachLastName() {
    const updatedName = document.getElementById('editLastName').value
    coach.lastName = updatedName

    displayName.innerHTML = `Coach ${coach.lastName} <i class="fa fa-pencil" onclick="updateCoachDetails()"></i>`
}

// Add team name
function addTeam() {
    const teamName = document.getElementById('coach-association').children[1]

    teamName.innerHTML = `
    <div>
        <input id="tName" type="text" />
        <button class="btn btn-primary" onclick="saveTeamName(tName.value)">Save</button>
    </div>
    `
}

// Save team name
function saveTeamName(t) {
    const teamName = document.getElementById('coach-association').children[1]

    team = t
    teamName.innerHTML = `${t}`
}

// Show events list
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

// Expand events list
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

// Add new player - dashboard
function addPlayer() {
    const fName = document.getElementById('pFirstName').value
    const lName = document.getElementById('pLastName').value
    const group = document.getElementById('group').value
    const throws = document.getElementById('throws').value
    const bats = document.getElementById('bats').value

    const p = new Player(fName, lName, group, throws, bats)

    players.push(p)

    dPlayerList.innerHTML += p.renderPlayer();
}

// Add new player association
function addAssociationPlayer() {
    const fName = document.getElementById('pFirstName').value
    const lName = document.getElementById('pLastName').value
    const group = document.getElementById('group').value
    const throws = document.getElementById('throws').value
    const bats = document.getElementById('bats').value

    const p = new Player(fName, lName, group, throws, bats)

    players.push(p)

    dPlayerList.innerHtml += p.renderPlayer()
}

// Add new coach
function addCoach() {
    const c = {
        fName: document.getElementById('cFirstName').value,
        lName: document.getElementById('cLastName').value
    }

    console.log(c)

}

// Go to player details page
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
