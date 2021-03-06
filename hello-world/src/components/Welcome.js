import React,{Component} from 'react';

class Welcome extends Component{
    render(){
        return (
            <div>
                <p> Hello {this.props.name} a.k.a {this.props.heroName} <h1> {this.props.children}</h1></p>
            </div>
        );
    }
}
export default Welcome;
