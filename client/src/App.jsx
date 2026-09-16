import { useEffect, useState } from "react";
import API from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await API.get("tasks/");
            setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addTask = (task) => {
        setTasks((previousTasks) => [
            task,
            ...previousTasks
        ]);
    };

    return (
        <div>
            <h1>Task Manager</h1>

            <TaskForm onTaskCreated={addTask} />

            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;