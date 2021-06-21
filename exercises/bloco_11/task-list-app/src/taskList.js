import Task from './Task'
const list = ['tomar banho', 'passear', 'merendar', 'estudar'];


function taskList() {
    return (
    <ol>
        {list.map((task) => <Task value={task} />)}
    </ol>
    )
}

export default taskList;