import React from 'react';
import Input from './inputList';
import DetailList from './detailList'





class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render(){

       

        return ( 
            <div className="TodoList">
                <Input/>
                <DetailList/>
            </div>
        )
    }
}

export default TodoList
