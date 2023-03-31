let month = [
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

const days = document.querySelectorAll('td')
function addTodo(){
    console.log('ADD')
}

days.forEach(e  => {
    const daysButtons = document.createElement('button')
    daysButtons.className = 'clickDay'
    daysButtons.onclick = addEventListener('click', addTodo)
    daysButtons.innerHTML = '0' 
    e.append(daysButtons)
    })


