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
    let nowWeek = weekday[now.getDay()]
    let nowDay = now.getDate()
    let nowMonth = now.getMonth()
    let nowYear = now.getFullYear()
    
    console.log(typeof(nowSeconds))
    todayDate.innerHTML = `${nowWeek}, ${nowDay}.${nowMonth}.${nowYear}`;
}

function updateTime(){
    let now = new Date();

    const todayTime = document.querySelector('.todayTime')
    let nowHours = now.getHours()
    let nowMinutes = now.getMinutes()
    let nowSeconds = now.getSeconds()

    todayTime.innerHTML = `${nowHours}:${nowMinutes}:${nowSeconds}`

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


