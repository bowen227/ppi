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

    console.log(player)
}

getPlayer()