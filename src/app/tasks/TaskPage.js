import { Component } from "react";
import { useNavigate } from "react-router-dom";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "../../sharedComponents/Header";
import Navigation from "../../sharedComponents/GeneralNavigation";
import './style/tasks.css';
class TaskPage extends Component{

    state={
        isLoged:this.props.isLoged,
    };

    getUsername(){
        return this.props.email;
     }

     

    redirect(path){
        const navigate = this.props.navigation;
        navigate(path,{replace:true});
     }

     
    render(){
        return (
        <>
           <Header logedIn={this.state.isLoged} userName={this.getUsername()} redirect={this.redirect.bind(this)} />
           <Navigation currentPage={'task'} />
           <section className="main-section">
                <AddTask addTask={this.props.addTask} />
                <Tasks tasks={this.props.tasks}/>
           </section>
           
        </>
        );
    }
}
export default function(props){
    const navigate=useNavigate();
    return <TaskPage {...props} navigation={navigate} /> 
};