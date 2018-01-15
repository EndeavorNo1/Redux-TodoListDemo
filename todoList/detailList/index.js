import React from 'react';

import {connect} from "react-redux";




class DetailList extends React.Component {
    
    constructor(props) {
        //console.log("props",props.info);
        super(props);
        this.state={
            itemList:props.info
        }
        this.deleteItem=this.deleteItem.bind(this);
    }
    deleteItem(index){
        const {info}=this.props;
        const {itemList}=this.state;
        info.splice(index,1)
        //console.log(index,info);
        this.setState({
            itemList:info
        })
        //console.log("itemList",itemList)

    }
    render(){
        const {info}=this.props;
        const {itemList}=this.state;

        
        
        //console.log(info);
        return ( 
            <div className="detailList">
                数据：<ul>
                    {
                        info.map((item,index)=>(
                                <li key={index}>
                                    {item}
                                    <button onClick={()=>{
                                        this.deleteItem(index);
                                    }}>刪除</button>
                                </li>
                            ))  
                    }
                </ul>
                    
            </div>
        )
    }
}
export default connect(
    state=>state.detailList,
    null
)(DetailList);

