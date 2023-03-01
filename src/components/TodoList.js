import React, { useState } from "react";
import TaskForm from "./TaskForm.js";


// Notez bien ici à quel point le composant TodoList est devenu
// simple et clair. Il ne gère plus d'état par lui même et ne fait
// que recevoir des propriétés qu'il va afficher à l'écran
// les tâches sont dans props.tasks et la fonction permettant
// de modifier le statut d'une tâche est dans props.onTaskToggle
const TodoList = (props) => {
    return <>
        <ul>
            {props.tasks.map(item => <li key={item.id}>
                <label>
                    <input
                        type="checkbox"
                        id="todo-${item.id}"
                        checked={item.done}
                        onChange={() => props.onTaskToggle(item.id)}
                    />
                    {item.text}
                </label>
            </li>)}
        </ul>
    </>
}

export default TodoList;