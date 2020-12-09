let headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'black'
headerContainer.style.color = 'blue'

let emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'red';
emergencyTasks.style.color = 'black';

let emergencyTasksImportant = document.getElementsByTagName('h3')[0];
emergencyTasksImportant.style.backgroundColor = 'black';

let emergencyTasksNoImportant = document.getElementsByTagName('h3')[1];
emergencyTasksNoImportant.style.backgroundColor = 'lightblue';
emergencyTasksNoImportant.style.color = 'black';

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'blue';

let noEmergencyTasksImportant = document.getElementsByTagName('h3')[2];
noEmergencyTasksImportant.style.backgroundColor = 'gray';

let noEmergencyTasksNoImportant = document.getElementsByTagName('h3')[3];
noEmergencyTasksNoImportant.style.backgroundColor = 'pink';
noEmergencyTasksNoImportant.style.color = 'black'

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'gray'