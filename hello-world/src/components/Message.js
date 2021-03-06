import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super();
           this.state={
               Message:'welcome Visitor'
           }; 
        };
    
changeMessage(){
    this.setState({
        Message:'Thank you for Subscribing'
    });
}
 
    render(){
        return(<div>
            {this.state.Message}
            
            <button onClick={()=>
                this.changeMessage()
            }>

              
                Subscribe</button>
            
        </div>
        );
    }

}
export default Message;