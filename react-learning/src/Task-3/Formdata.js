import React, { Component } from "react";

class Formdata extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName : '', 
            password:'', 
            topic:'react' , 
            comments:''
        }
    }
    handleUserName=(event)=>{
        this.setState({
            userName:event.target.value,
        })
    }
    handlePassword=(event)=>{
        this.setState({
            password:event.target.value,
        })
    }
    handleTopic=(event)=>{
        this.setState({
            topic:event.target.value,
        })
    }
    handleComment=(event)=>{
        this.setState({
            comments:event.target.value,
        })
    }
    handleSubmit =(event)=>{
        var name=this.state.userName;
        var pass=this.state.password;
        var top=this.state.topic;
        var com=this.state.comments;
        alert("name is     "+name +"    password is    "+ pass +"    topic selected       "+top+"     comment :-    "+com )
        // console.log({name})
    }
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName :</label>
                <input value={this.state.userName} onChange={this.handleUserName}/>
            </div>
            <div>
                <label>Password :</label>
                <input value={this.state.password} onChange={this.handlePassword}/>
            </div>
            <div>
                <label>Topic:</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value="react">React</option>
                    <option value="javascript">JavaScript</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                </select>
            </div>
            <div>
                <label>Comments :</label>
                <textarea value={this.state.comments} onChange={this.handleComment}/>
            </div>
            <button type="submit">submit</button>
            </form>
            </>
        );
    }
}


export default Formdata;