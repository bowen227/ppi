////////////////////////////////////////////////
///////// SIGNUP.HTML FUNCTIONS BELOW /////////

// SIGNUP ASSOCIATION
function createAssociation() {
    console.log("Create association")
}

// SIGNUP COACH
function createCoach() {
    console.log("Create coach")
}


////////////////////////////////////////////////
///////// LOGIN.HTML FUNCTIONS BELOW /////////

function login(e) {
    e.preventDefault()

    const formError = document.getElementById('formError')
    const t = document.getElementById('type').value

    if (t == 'association') {
        location.href = "association.html"
    }

    if (t == 'coach') {
        location.href = "dashboard.html"
    }

    if (t == '') {
        formError.innerText = "Need to select type"
        formError.classList.add('p-2')
    }
}
