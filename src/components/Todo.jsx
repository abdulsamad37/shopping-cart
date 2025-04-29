// Todo.js
import React, { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        if (!input.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: input }]);
        setInput('');
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>📝 To-Do List</h1>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add a task..."
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}{' '}
                        <button onClick={() => handleDeleteTask(task.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
