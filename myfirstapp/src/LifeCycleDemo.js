import React, { Component} from "react";

class LifeCycleDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = { count : 0 };
        console.log("1 Constructor: component is being created");
    }

    componentDidMount(){
        console.log("3 componentDidMount : Component added to DOM");
    }

    componentDidUpdate(){
        console.log("4 componentDidUpdate: component updated");
    }

    componentWillUnmount(){
        console.log("5 componentWillUnmount: component will be removed");
    }
    render(){
        console.log("2. render: component is rendering");
        return(
            <div>
            <h2>react lifecycle demo</h2>
            <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}> 
                update count
                </button>
            
            </div>
            );
    }


}
export default LifeCycleDemo;