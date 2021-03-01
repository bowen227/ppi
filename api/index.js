const express = require('express')

const cors =require('cors')
const app = express()

app.use(cors())

const port = 3000

const firstNames = ['Tom', 'Easton', 'Max', 'Leigh', 'Samuel', 'Doug', 'Peter', 'Bradley', 'Chad', 'Charles']
const lastNames = ['Owen', 'Golliher', 'Spears', 'Martin', 'Manning', 'Wells', 'Sokohl', 'Reece', 'Smith', 'Coulter']
const positions = ['Infield', 'Outfield']
const groups = ['6u', '8u', '10u', '12u']

// ARRAY OF PLAYERS
let players = []
let players_group_one = []
let players_group_two = []
let players_group_three = []
let players_group_four = []

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
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/all_players', (req, res) => res.json(
    players
))

app.get('/api/6u_players', (req, res) => res.json(
    players_group_one
))

app.get('/api/8u_players', (req, res) => res.json(
    players_group_two
))

app.get('/api/10u_players', (req, res) => res.json(
    players_group_three
))

app.get('/api/12u_players', (req, res) => res.json(
    players_group_four
))

app.get('/api/groups', (req, res) => res.json(
    groups
))

app.get('/api/search/:player', (req, res) => {
    const match = []
    const searchName = req.params.player

    players.forEach(player => {
        const name = `${player.fName} ${player.lName}`
        if (name.toLowerCase().includes(searchName)) {
            match.push(player)
        }
    })
    res.json(match)
})

app.listen(
    port,
    () => console.log(`app listening at http://localhost:${port}`)
)