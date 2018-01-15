import React from 'react';
import {connect} from "react-redux";
import  {addTodo} from "../detailList/action";
import { bindActionCreators } from 'redux';




class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            info:''
        }
        this.changeValue=this.changeValue.bind(this);
    }

    addInfo=()=>{
        const {addTodo} = this.props;
        const {info}=this.state;
        addTodo(info);
        console.log("info",info);
        
    }

    changeValue(e){
        // TODO 过滤输入的字符
        
        this.setState({
            info: e.target.value
        });
    }
    render(){
        const {info}=this.state;
        return ( 
            <div className="inputList">
                <input type="text"  value={info} onChange={this.changeValue}/>
                <button onClick={this.addInfo}>添加</button>
            </div>
        )
    }
}

 
export default connect(
    state=>state.detailList,
    dispatch=>({
        addTodo: bindActionCreators(addTodo,dispatch)
    })
)(InputList);