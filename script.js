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
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

let dateWithTodo = []
let now = new Date()
let yearForChange = now.getFullYear()
let monthForChange = now.getMonth()

function notTodos(){
    const notTodos = document.createElement('div')
    notTodos.className ="notTodo"
    notTodos.innerHTML="<strong>NOT TODO's YET!</strong>"
    document.querySelector('.list').append(notTodos)
}

function removeNotTodos(){
    document.querySelector('.notTodo').remove()
}

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
         d.getDate() == now.getDate())
         {
            table += '<td>' + `<button class="clickDay" id="
            ${String(d.getDate()).length == 1 ? '0' + String(d.getDate()) : String(d.getDate())}.${String(d.getMonth()+1).length == 1 ? '0' + String(d.getMonth()+1) : String(d.getMonth()+1)}.${d.getFullYear()}
            "onclick ="addDate(this.id)"; style=" background: linear-gradient(to bottom left, rgb(128, 58, 233), rgb(254, 197, 207));">` + d.getDate() + '</button>' + '</td>'
        }else if(dateWithTodo.includes(`${String(d.getDate()).length == 1 ? '0' + String(d.getDate()) : String(d.getDate())}.${String(d.getMonth()+1).length == 1 ? '0' + String(d.getMonth()+1) : String(d.getMonth()+1)}.${d.getFullYear()}`))
        {
            table += '<td>' + `<button class="clickDay" id="
            ${String(d.getDate()).length == 1 ? '0' + String(d.getDate()) : String(d.getDate())}.${String(d.getMonth()+1).length == 1 ? '0' + String(d.getMonth()+1) : String(d.getMonth()+1)}.${d.getFullYear()}
            "onclick ="addDate(this.id)"; style="background-color: rgba(223, 111, 111, 0.4)">` + d.getDate() + '</button>' + '</td>'
        }
        else{
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
months.forEach(element => {
    const buttonMnth = document.createElement('button')
    buttonMnth.className = "clickMonth"
    buttonMnth.innerHTML = element
    buttonMnth.id = months.indexOf(element)
    buttonMnth.addEventListener('click', ()=>{
        document.querySelector('.forChangeMonth').style.display = 'none';
        document.querySelector('.calendar').style.display = 'block'
        monthForChange =  event.target.id
        document.querySelector('.changeMonth').innerHTML = months[monthForChange]
        createCalendar('.calendar', yearForChange, monthForChange)
    })
    buttonDivs.append(buttonMnth)
});
monthListForCahnge.append(buttonDivs)

function changeMonth(){
    monthListForCahnge.style.display = "block";
    document.querySelector('.calendar').style.display = "none";
}

function addDate(id){
    const list = document.querySelector('.list')
    const todoInput = document.querySelector('.todoInput')
    const todos = document.createElement('div')
    todos.id = ' '+id.replace('\n','').trim()
    todos.style.color="white"

    const todoValue = document.createElement('div')
    todoValue.className = "todos"
    todoValue.id = ' '+id.replace('\n','').trim()
    if(todoInput.value.trim() != ""){
        
        const todoDate = document.createElement('div')
        todoDate.className="todoDate"
        todoDate.innerHTML = id
        todoValue.innerHTML = todoInput.value + '<br>'
        
        const removeTodo = document.createElement('button')
        removeTodo.style.cssText=`
        background: none;
        margin-left: 640px;
        `
        const icon = document.createElement('img')
        icon.id=' '+id.replace('\n','').trim()
        icon.src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
        icon.style.cssText=`
        padding:0;
        height:30px;
        width:30px; 
        `
        const complete = document.createElement('input')
        complete.type="checkbox"
        complete.id=' '+id.replace('\n','').trim()

        complete.style.cssText=`
        width:28px;
        height:28px;
        `
        
        removeTodo.append(complete)
        removeTodo.append(icon)
        

        complete.addEventListener('change', function(){
            if (this.checked) {
                todoValue.style.setProperty("text-decoration", "line-through");
                dateWithTodo.splice(dateWithTodo.indexOf((event.target.id).trim()), 1);
                createCalendar('.calendar', yearForChange, monthForChange)
            } else {
                todoValue.style.setProperty("text-decoration", "none");
                dateWithTodo.push(id.replace('\n','').trim())
                createCalendar('.calendar', yearForChange, monthForChange)
            }
        })

        icon.addEventListener('click', ()=>{
            document.getElementById(event.target.id).remove()
            dateWithTodo.splice(dateWithTodo.indexOf((event.target.id).trim()), 1);
            if(dateWithTodo.length == 0){
                notTodos();
            }
            createCalendar('.calendar', yearForChange, monthForChange)
        })

        todos.append(todoDate)
        todos.append(todoValue)
        todoValue.append(removeTodo)

        list.append(todos)

        todoInput.value = ""
        const messageChooseDate = document.querySelector('.messageChooseDate')
        messageChooseDate.style.display = "none"

        const totalTodoList = document.querySelector('.totalTodoList')
        totalTodoList.style.display = "block"

        const day = document.getElementById(id)
        dateWithTodo.push(id.replace('\n','').trim())
        if (document.querySelector('.notTodo') !== null){
            removeNotTodos()
        }
        createCalendar('.calendar', yearForChange, monthForChange)
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