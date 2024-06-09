import AddTodoForm from "./AddTodoForm"
import Todolist from "./Todolist"
import { useState } from "react"
function Todocomponent() {

    const [activityArr, setactivityArr] = useState([
        {
            id: 1,
            activity: "Go for walk"
        },
        {
            id: 2,
            activity: "Do exercise"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">

                <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
                <Todolist activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </div>


    )
}

export default Todocomponent