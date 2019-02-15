import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './todolist.css';


export class ToDoList extends React.Component {
    state = {
        text :'',
        todolist : []
    }
    handelInputChange=(e)=>{
        const {value} = e.target ;
        this.setState({text:value});
    }
    handleButtonOnClick=()=>{
        const {text, todolist} = this.state;
        console.log(text);
        const item = todolist;
        item.push(text);
        this.setState({todolist:item, text:''});
        console.log(item);
    }
    handleItemDelete=(index)=>{
        const {todolist} = this.state;
        var arr = todolist.filter((s, id)=>{
            if(index != id)
            {
                return s;
            }
        });
        this.setState({todolist:arr});
    }
    render(){
        const {todolist} = this.state;
        return <div className="container">
            <div className="wrapper">
            <div className="title">To Do List</div>
            <div className='inputContainer'>
            <Input type="text" onChange={this.handelInputChange} value={this.state.text}/>
            <button onClick={this.handleButtonOnClick} className='addtodo'>Add To Do </button>
            </div>
            <ListGroup className='list'>
                {todolist.map((v, index)=>{
                    return <ListGroupItem key={index}>{v}<button className='delete' onClick = {()=>this.handleItemDelete(index)}>Delete</button></ListGroupItem>
                })}
            </ListGroup>
            </div>
        </div>   
    }
}