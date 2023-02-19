import { Component } from "react";
import Task from "./Task";
class FinishedTasks extends Component{
    render(){
        return(
            <section>
            <h5 className="section-title">Finished</h5>
            {this.props.tasks.map(
               (task,index)=>(<Task task={task} key={index}/> )
            )}
            </section>
        );
    }
}export default FinishedTasks; 