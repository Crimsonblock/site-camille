import { Component } from "react";

class Card extends Component{
    render(){
        return(
            <div className="card">
                
                {this.props.title ? <h2 className="title roboto-light blue">{this.props.title}</h2> : ""}
                <p className="card-content">
                    {this.props.children}
                </p>
            </div>
        )
    }
}

export default Card;