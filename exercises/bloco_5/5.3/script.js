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
  button.innerHTML = 'Feriados';
}

createHolidays();

