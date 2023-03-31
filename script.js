let months = [
    'January',
    'Febrary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function updateDate(){
    let now = new Date();

    const todayDate = document.querySelector('.todayDate')
    todayDate.innerHTML = `${weekday[now.getDay()]}, 0${now.getDate()}.0${now.getMonth()}.${now.getFullYear()}`;
}

function todayYearMonth(){
    let now = new Date();
    
    const todayMonth = document.querySelector('.changeMonth')
    todayMonth.innerHTML = `${months[now.getMonth()]}`

    const todayYear = document.querySelector('.year')
    todayYear.innerHTML = `${now.getFullYear()}`
}

function addTodo(){
    console.log('ADD')
}

const days = document.querySelectorAll('td')
days.forEach(e  => {
    const daysButtons = document.createElement('button')
    daysButtons.className = 'clickDay'
    daysButtons.onclick = addEventListener('click', addTodo)
    daysButtons.innerHTML = '0' 
    e.append(daysButtons)
    })


