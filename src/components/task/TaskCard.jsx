import React from 'react'
import { useState } from 'react/cjs/react.development'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'

export const TaskCard = () => {
    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);
    return (
        <div className="taskcard">
            <TaskCardTitle />
            <TaskCardDeleteButton />
            <TaskAddInput
                inputText= {inputText}
                setInputText={setInputText}
                taskList={taskList}
                setTaskList={setTaskList}
            />
            <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
        </div>
    )
}
