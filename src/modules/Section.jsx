import { Component } from "react";


class Section extends Component{    
    render(){
        return(
            <div className="section">
                {this.props.title ? <h2 className="subtitle roboto-thin">{this.props.title}</h2> : ""}
                {this.props.children}
            </div>
        );
    }
}

export default Section;