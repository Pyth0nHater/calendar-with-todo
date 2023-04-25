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
let yearForChange = now.getFullYear()
let monthForChange = now.getMonth()


function updateDate(){
    let now = new Date();

    const todayDate = document.querySelector('.todayDate')
    let nowWeek = weekday[now.getDay()]
    let nowDay = String(now.getDate()).length == 1 ? '0' + String(now.getDate()) : String(now.getDate())
    let nowMonth = String(now.getMonth()+1).length == 1 ? '0' + String(now.getMonth()+1) : String(now.getMonth()+1)
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
        if(
         d.getMonth() == now.getMonth() && 
         d.getFullYear() == now.getFullYear() && 
         d.getDate() == now.getDate()){
            table += '<td>' + `<button class="clickDay" id="
            ${String(d.getDate()).length == 1 ? '0' + String(d.getDate()) : String(d.getDate())}.${String(d.getMonth()+1).length == 1 ? '0' + String(d.getMonth()+1) : String(d.getMonth()+1)}.${d.getFullYear()}
            "onclick ="addDate(this.id)"; style=" background: linear-gradient(to bottom left, rgb(128, 58, 233), rgb(254, 197, 207));">` + d.getDate() + '</button>' + '</td>'
        }else{
        table += '<td>' + `<button class="clickDay" id="
            ${String(d.getDate()).length == 1 ? '0' + String(d.getDate()) : String(d.getDate())}.${String(d.getMonth()+1).length == 1 ? '0' + String(d.getMonth()+1) : String(d.getMonth()+1)}.${d.getFullYear()}"
            onclick ="addDate(this.id)" >` + d.getDate() + '</button>' + '</td>'
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

function changeYearBack(){
    yearForChange--
    const todayYear = document.querySelector('.year')
    todayYear.innerHTML = `${yearForChange}`
    createCalendar('.calendar', yearForChange, monthForChange)
}

function changeYearNext(){
    yearForChange++
    const todayYear = document.querySelector('.year')
    todayYear.innerHTML = `${yearForChange}`
    createCalendar('.calendar', yearForChange, monthForChange)
}

function getDay(date){
    let day = date.getDay();
    if(day == 0) day = 7
    return day - 1
}


const monthListForCahnge = document.querySelector('.forChangeMonth')
const buttonDivs = document.createElement('div')
monthListForCahnge.append(buttonDivs)
months.forEach(element => {
    const buttonMnth = document.createElement('button')
    buttonMnth.className = "clickMonth"
    buttonMnth.innerHTML = element
    const funcForMonth = (monthForChange) =>{
        monthForChange = event.target.innerHTML;
        document.querySelector('.forChangeMonth').style.display = 'none';
        document.querySelector('.calendar').style.display = 'block'
        createCalendar('.calendar', yearForChange, months.indexOf(event.target.innerHTML))
        todayMonth = document.querySelector('.changeMonth').innerHTML = `${event.target.innerHTML}`
        return monthForChange
    }
    buttonMnth.onclick = funcForMonth
    buttonDivs.append(buttonMnth)
});

function changeMonth(){
    monthListForCahnge.style.display = "block";
    document.querySelector('.calendar').style.display = "none";
}



function addDate(id){
    const list = document.querySelector('.list')
    const todoInput = document.querySelector('.todoInput')
    const todo = document.createElement('div')
    todo.className = "todos"
    if(todoInput.value.trim() != ""){
    todo.innerHTML = id +" "+ todoInput.value
    list.append(todo)
    todoInput.value = ""
    const messageChooseDate = document.querySelector('.messageChooseDate')
    messageChooseDate.style.display = "none"

    const totalTodoList = document.querySelector('.totalTodoList')
    totalTodoList.style.display = "block"

    const day = document.getElementById(id)
    day.style.color = "red"
    }
}

function addTodo(id){    
    const todoInput = document.querySelector('.todoInput')
    if(todoInput.value.trim() != ""){
    const totalTodoList = document.querySelector('.totalTodoList')
    totalTodoList.style.display = "none"

    const messageChooseDate = document.querySelector('.messageChooseDate')
    messageChooseDate.style.display = "block"
    }
}

createCalendar('.calendar', yearForChange, monthForChange)


