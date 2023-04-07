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

let totalList = []
let dayList = []

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
            table += '<td>' + `<button class="clickDay" id="${d.getDate()}${d.getMonth()}${d.getFullYear()}"onclick ="addTodo(this.id,totalList,dayList)"; style=" background: linear-gradient(to bottom left, rgb(128, 58, 233), rgb(254, 197, 207));">` + d.getDate() + '</button>' + '</td>'
        }else{
        table += '<td>' + `<button class="clickDay" id="${d.getDate()}${d.getMonth()}${d.getFullYear()}" onclick ="addTodo(this.id,totalList,dayList)" >` + d.getDate() + '</button>' + '</td>'
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



function addTodo(id,totalList,dayList){
    
    const todoList = document.querySelector('.todoList')
    const totalTodoList = document.createElement('div')
    totalTodoList.className = "totalTodoList"
    totalTodoList.className = "totalTodoList"
    todoList.append(totalTodoList)

    const input = document.createElement('input')
    input.className = "todoInput"

    const list = document.createElement('div')
    list.className = "list"

    const buttonForAdd = document.createElement('button')
    buttonForAdd.className = "addTodo"
    buttonForAdd.innerHTML = "+"
    buttonForAdd.onclick = () => {
        const todos = document.createElement('div')
        todos.innerHTML = input.value 
        todos.className = "todos"
        list.append(todos)
        input.innerHTML = ""
        return input.innerHTML
    }

    totalTodoList.append(input,buttonForAdd,list)
}

createCalendar('.calendar', yearForChange, monthForChange)


