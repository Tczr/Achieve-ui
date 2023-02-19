import { Component } from "react";

class Edit extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:this.props.user.id,
            currentEmail:this.props.user.email
        }
    }
    render(){
        return(
            <section>
                <form>
                    <input  type="text" value={this.state.currentEmail} placeholder={this.value}/>
                    <div>
                        <a href="/">change password</a>
                    </div>
                    <button type="submit" >Update</button>
                </form>
                <span></span>
            </section>
        )
    }
}export default Edit;