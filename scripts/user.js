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

const formError = document.getElementById('formError')

function login(e) {
    e.preventDefault()
    const t = document.getElementById('type').value

    if (t == 'association') {
        location.href = "association.html"
    }

    if (t == 'coach') {
        location.href = "dashboard.html"
    }

    if (t == '') {
        formError.innerHTML = `Need to select type`
        formError.classList.add('p-2')
    }
}
