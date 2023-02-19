import { Component } from "react";
import '../style/addTask.css';
class AddTask extends Component{

    state={
        task:{
            name:'',
            description:'',
            status:'ACTIVE',
            secdule:{
                start:new Date(),
                end:null,
            },
            reminder:false,
            createdAt:new Date().toDateString(),
        }
    }

    setTitle(title){
        // console.log(title.target.value);
        this.setState({task:
            {
                name:title.target.value,
                description:this.state.task.description,
                status:this.state.task.status,
                secdule:{
                    start:this.state.task.secdule.start,
                    end:this.state.task.secdule.end,
                },
                reminder:this.state.task.reminder,
                createdAt:this.state.task.createdAt,
            }
        });
    }

    setReminder(check){
        console.log(check.target.checked)
        this.setState({task:
            {
                name:this.state.task.name,
                description:this.state.task.description,
                status:this.state.task.status,
                secdule:{
                    start:this.state.task.secdule.start,
                    end:this.state.task.secdule.end,
                },
                reminder:check.target.checked,
                createdAt:this.state.task.createdAt,
            }
        });
    }
    submitHandler(event){
        event.preventDefault();

        const newTask = this.state.task;
        this.props.addTask(newTask);

        this.setState({
            task:{
                name:'',
                description:'',
                status:'ACTIVE',
                secdule:{
                    start:new Date(),
                    end:null,
                },
                reminder:false,
                createdAt:new Date().toDateString(),
            }
        })
    }

    render(){
        return (
            <section>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <input  type="text" value={this.state.task.name} placeholder="Add Task" onInput={this.setTitle.bind(this)}/>
                    <div>
                        <label>Set reminder</label>
                        <input type="checkbox" checked={this.state.task.reminder} onChange={this.setReminder.bind(this)}/>
                    </div>
                    <button type="submit" >Add Task</button>
                </form>
                <span></span>
            </section>
        );
    }
}export default AddTask;