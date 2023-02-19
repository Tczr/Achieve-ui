import { Component } from "react";
import Task from './Task';
class ActiveTasks extends Component{
    render(){
        return(
            <section>
            <h5 className="section-title">Progress</h5>
            {this.props.tasks.map(
               (task,index)=>(<Task task={task} key={index}/> )
            )}
            </section>
        );
    }
}export default ActiveTasks;