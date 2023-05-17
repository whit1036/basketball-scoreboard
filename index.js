let homeScoreCount = document.getElementById('home-score')
let homeScore = 0

// Home Team Scores

function home1Point() {
    console.log('Home Team +1!')
    homeScore += 1
    homeScoreCount.textContent = homeScore
}

function home2Points() {
    console.log('Home Team +2!')
    homeScore += 2
    homeScoreCount.textContent = homeScore
}

function home3Points() {
    console.log('Home Team +3!')
    homeScore += 3
    homeScoreCount.textContent = homeScore
}

//////////////////////////////////////////////////////

let guestScoreCount = document.getElementById('guest-score')
let guestScore = 0

// Guest Team Scores

function guest1Point() {
    console.log('Guest Team +1!')
    guestScore += 1
    guestScoreCount.textContent = guestScore
}

function guest2Points() {
    console.log('Guest Team +2!')
    guestScore += 2
    guestScoreCount.textContent = guestScore
}

function guest3Points() {
    console.log('Guest Team +3!')
    guestScore += 3
    guestScoreCount.textContent = guestScore
}