import { useState } from "react";
import API from "../api";

function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("SUBMIT FUNCTION RUNNING");

        try {
            const response = await API.post("tasks/", {
                title: title,
                description: description,
            });

            console.log("SUCCESS:", response.data);

            onTaskCreated(response.data);

            setTitle("");
            setDescription("");

        } catch (error) {
            console.error("ERROR:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;