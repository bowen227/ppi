
let currentPlayer = null

// GET PLAYER DETAILS FROM ROUTE AND CREATE OBJ SET TO CURRENTPLAYER
function getPlayer() {
    const qString = window.location.search
    const urlParams = new URLSearchParams(qString)

    const profileImg = urlParams.get('img')
    const fName = urlParams.get('fName')
    const lName = urlParams.get('lName')
    const position = urlParams.get('position')
    const PPI = urlParams.get('ppi')

    const player = {
        profileImg: profileImg,
        fName: fName,
        lName: lName,
        position: position,
        PPI: PPI
    }

    currentPlayer = player
}

getPlayer()

// DISPLAY PLAYER IN DOM
function displayPlayer() {
    const playerDiv = document.getElementById('player-info')
    playerDiv.innerHTML += `
    <div>
        <div class="row">
            <div class="col-3">
                <img src=${currentPlayer.profileImg} width="60" height="60" />
            </div>
            <div class="col">
                <h2>${currentPlayer.fName} ${currentPlayer.lName}</h2>
                <p>${currentPlayer.position}</p>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col">
                <h3>Player Power Index</h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
            <h1>${currentPlayer.PPI}</h1>
            </div>
        </div>
    </div>
    `
}

displayPlayer()

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/////////////////////////// EVAL OBJ SETUP ////////////////////////////
///////////////////////////////////////////////////////////////////////
// let pastEvals = [
//     {
//         infield: {
//             mechanics: '',
//             groundballs: '',
//             range: '',
//         },
//         outfield: {
//             mechanics: '',
//             pop_flys: '',
//             range:''
//         },
//         throwing: {
//             mechanics: '',
//             strength: '',
//             accuracy: ''
//         },
//         pitching: {
//             mechanics: '',
//             speed: '',
//             accuracy: ''
//         },
//         hitting: {
//             mechanics: '',
//             power: '',
//             contact: ''
//         },
//         feet: {
//             home_first: '',
//             first_home: '',
//             mobility: ''
//         }
//     }
// ]
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// GENERATE ARRAY OF FAKE EVALS
const fakePastEvals = []

function generateRandomEvals() {
    for (let index = 0; index < 4; index++) {
        const e = {
            infield: {
                mechanics: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                groundballs: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                range: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
            },
            outfield: {
                mechanics: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                pop_flys: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                range: parseFloat((Math.random() / 100 * 5) *100).toFixed(2)
            },
            throwing: {
                mechanics: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                strength: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                accuracy: parseFloat((Math.random() / 100 * 5) *100).toFixed(2)
            },
            pitching: {
                mechanics: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                speed: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                accuracy: parseFloat((Math.random() / 100 * 5) *100).toFixed(2)
    
            },
            hitting: {
                mechanics: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                power: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                contact: parseFloat((Math.random() / 100 * 5) *100).toFixed(2)
            },
            feet: {
                home_first: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                first_home: parseFloat((Math.random() / 100 * 5) *100).toFixed(2),
                mobility: parseFloat((Math.random() / 100 * 5) *100).toFixed(2)
            }
        }
        fakePastEvals.push(e)
    }
}

generateRandomEvals()

// DISPLAY FAKE EVALS
function displayPastEvals() {
    const evalDiv = document.getElementById('player-evals')

    for (let index = 0; index < fakePastEvals.length; index++) {
        const element = fakePastEvals[index];

        const infield = (JSON.parse(element.infield.mechanics) + JSON.parse(element.infield.groundballs) + JSON.parse(element.infield.range) / 3).toFixed(2)
        const outfield = (JSON.parse(element.outfield.mechanics) + JSON.parse(element.outfield.pop_flys) + JSON.parse(element.outfield.range) / 3).toFixed(2)
        const throwing = (JSON.parse(element.throwing.mechanics) + JSON.parse(element.throwing.strength) + JSON.parse(element.throwing.accuracy) / 3).toFixed(2)
        const pitching = (JSON.parse(element.pitching.mechanics) + JSON.parse(element.pitching.speed) + JSON.parse(element.pitching.accuracy) / 3).toFixed(2)
        const hitting = (JSON.parse(element.hitting.mechanics) + JSON.parse(element.hitting.power) + JSON.parse(element.hitting.contact) / 3).toFixed(2)
        const feet = (JSON.parse(element.feet.home_first) + JSON.parse(element.feet.first_home) + JSON.parse(element.feet.mobility) / 3).toFixed(2)
        
        evalDiv.innerHTML += `
        <div class="container py-2">
            <div class="row row-content">
                <div class="col">
                    <div class="table-responsive">
                        <table class="table table-stripped">
                            <thead>
                                <tr>
                                    <th>IN</th>
                                    <th>OUT</th>
                                    <th>TH</th>
                                    <th>PI</th>
                                    <th>HI</th>
                                    <th>SPD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${infield}</td>
                                    <td>${outfield}</td>
                                    <td>${throwing}</td>
                                    <td>${pitching}</td>
                                    <td>${hitting}</td>
                                    <td>${feet}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

displayPastEvals()

// ADD NEW EVAL
function newEval() {
    console.log('Start Eval')
}