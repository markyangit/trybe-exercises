function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listOfDaysOfMonth = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
      let dia = dezDaysList[index];
      let liElement = document.createElement('li');
      liElement.innerText = dia;
      liElement.className = 'day';
      listOfDaysOfMonth.appendChild(liElement)
    if (index === 0 || index === 1) {
      liElement.style.color = 'rgb(238,238,238)';
    } else if (liElement.innerText === '25') {
      liElement.className = 'day holiday friday'
    } else if (liElement.innerText === '24' || liElement.innerText === '25' || liElement.innerText === '31') {
      liElement.className = 'day holiday';
    } else if (liElement.innerText === '4' || liElement.innerText === '11' || liElement.innerText === '18' || liElement.innerText === '25') {
      liElement.className = 'day friday'
    }
  }
  
}

createDaysOfTheMonth();

function createHolidays(Feriados) {
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(button)
  button.innerText = 'Feriados';
}

createHolidays();

function eventClickHoliday() {
  let button = document.getElementById('btn-holiday');

  button.addEventListener('click', changeBackgroundColor)

  function changeBackgroundColor() {
    let holidays = document.getElementsByClassName('holiday');

    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor == 'lightblue') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)'
      } else {
        holidays[index].style.backgroundColor = 'lightblue'
      }
    }
  }
}

eventClickHoliday();

function createFriday(string) {
  let button = document.createElement('button');
  button.id = 'btn-friday';
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(button)
  button.innerText = string;
}

createFriday('Sexta-feira');

function clickToFriday() {
  let button = document.getElementById('btn-friday');

  button.addEventListener('click', changeText)
  var contentInnerText = [];
  var fridays = document.getElementsByClassName('friday');
  for (let index = 0; index < fridays.length; index += 1) {
    contentInnerText.push(fridays[index].innerText);
  }

  function changeText() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText != 'SEXTAAAA') {
    fridays[index].innerText = 'SEXTAAAA'
  } else {
    fridays[index].innerText = contentInnerText[index];
   }
  }
  }
}
clickToFriday();

function daysEvent1() {
  let daysArray = document.getElementsByClassName('day');

  for (let index = 0; index < daysArray.length; index += 1) {
    daysArray[index].addEventListener('mouseover', daysZoom)
    daysArray[index].addEventListener('mouseleave', daysZoomOut)
  }
  function daysZoom(event) {
    event.target.style.fontSize = '40px'
  }
  function daysZoomOut(event) {
    event.target.style.fontSize = '20px'
  }
}

daysEvent1();

function addTasks(task) {
  let spanTag = document.createElement('span');
  let divMyTasks = document.getElementsByClassName('my-tasks')[0];
  spanTag.innerText = task;
  divMyTasks.appendChild(spanTag)
}

addTasks('tarefa kkkkk');

function subtitleWithColor(color) {
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = color;
  document.getElementsByClassName('my-tasks')[0].appendChild(div)
}

subtitleWithColor('green');

function selectedTask() {
  let tasks = document.getElementsByClassName('task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', selectTask)
  }
  function selectTask(event) {
    if (event.target.className === 'task') {
      event.target.className = 'task selected'
    }
    else if (event.target.className === 'task selected') {
      event.target.className = 'task'
    }
  }
}

selectedTask();

function subtitleForTheDay() {
  let taskSelected = document.getElementsByClassName('task selected')[0];
  let daysArray = document.getElementsByClassName('day');

  for (let index = 0; index < daysArray.length; index += 1) {
    daysArray[index].addEventListener('click', changeColor)
  }
  function changeColor(event) {
    if (event.target.style.color == document.getElementsByClassName('task selected')[0].style.backgroundColor) {
    event.target.style.color = 'rgb(119,119,119)'
    } else {
      event.target.style.color = document.getElementsByClassName('task selected')[0].style.backgroundColor
    }
  }
}

subtitleForTheDay();