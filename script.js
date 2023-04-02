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
let now = new Date();


function updateDate(){
    let now = new Date();

    const todayDate = document.querySelector('.todayDate')
    let nowWeek = weekday[now.getDay()]
    let nowDay = String(now.getDate()).length == 1 ? '0' + String(now.getDate()) : String(now.getDate())
    let nowMonth = String(now.getMonth()).length == 1 ? '0' + String(now.getMonth()) : String(now.getMonth())
    let nowYear = now.getFullYear()
    
    todayDate.innerHTML = `${nowWeek}, ${nowDay}.${nowMonth}.${nowYear}`;
}

function updateTime(){
    let now = new Date();

    const todayTime = document.querySelector('.todayTime')
    let nowHours = String(now.getHours()).length == 1 ? '0' + String(now.getHours()) : String(now.getHours())
    let nowMinutes = String(now.getMinutes()).length == 1 ? '0' + String(now.getMinutes()) : String(now.getMinutes())
    let nowSeconds = String(now.getSeconds()).length == 1 ? '0' + String(now.getSeconds()) : String(now.getSeconds())

    todayTime.innerHTML = `${nowHours}:${nowMinutes}:${nowSeconds}`

}

function todayYearMonth(){
    let now = new Date();
    
    const todayMonth = document.querySelector('.changeMonth')
    todayMonth.innerHTML = `${months[now.getMonth()]}`

    const todayYear = document.querySelector('.year')
    todayYear.innerHTML = `${now.getFullYear()}`
}



function createCalendar(elem, year, month){
    elem = document.querySelector(elem)

    let d = new Date(year, month)

    let table = `
    <table>
    <tr>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
        <th>Sun</th>
    </tr><tr>`;

    for(let i = 0; i<getDay(d);i++){
        table += '<td></td>'
    }

    while(d.getMonth() == month){
        if(d.getDate() == now.getDate()){
            table += '<td>' + '<button class="clickDay" onclick ="addTodo()" style=" background: linear-gradient(to bottom left, rgb(128, 58, 233), rgb(254, 197, 207));">' + d.getDate() + '</button>' + '</td>'
        }else{
        table += '<td>' + '<button class="clickDay" onclick ="addTodo()" >' + d.getDate() + '</button>' + '</td>'
        }
        if(getDay(d) % 7 == 6){
           table+='</tr><tr>'
        }
        d.setDate(d.getDate()+1)
    }

    for(let i = getDay(d); i<7;i++){
        table += '<td></td>'
    }

    table += '</tr></table>'
    elem.innerHTML = table
}
let yearForChange = now.getFullYear()
let monthForChange = now.getMonth()

createCalendar('.calendar', yearForChange, monthForChange)

function changeYearBack(){
    yearForChange--
    const todayYear = document.querySelector('.year')
    todayYear.innerHTML = `${yearForChange}`
    createCalendar('.calendar', yearForChange, now.getMonth())
}

function changeYearNext(){
    yearForChange++
    const todayYear = document.querySelector('.year')
    todayYear.innerHTML = `${yearForChange}`
    createCalendar('.calendar', yearForChange, now.getMonth())
}

function getDay(date){
    let day = date.getDay();
    if(day == 0) day = 7
    return day - 1
}


function addTodo(){
    console.log('ADD')
}


function changeMonth(){
    const monthListForCahnge = document.querySelector('.forChangeMonth')
    months.forEach(element => {
        const monthButtons = document.createElement('button')
        monthButtons.className = 'clickMonth'
        monthButtons.id = element
        monthButtons.innerHTML = element
        monthListForCahnge.append(monthButtons)
        monthButtons.onclick = addEventListener('click',()=>{
            console.log(monthButtons.id)
        })
    });
    monthListForCahnge.style.display = "block";
    document.querySelector('.calendar').style.display = "none";
}

function choseMonth(){
    
}

// const days = document.querySelectorAll('td')
// days.forEach(e  => {
//     const daysButtons = document.createElement('button')
//     daysButtons.className = 'clickDay'
//     daysButtons.onclick = addEventListener('click', addTodo)
//     daysButtons.innerHTML = '0' 
//     e.append(daysButtons)
//     })


