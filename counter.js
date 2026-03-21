import { Component } from "react";

export default class Counter extends Component {

    constructor(props) {
        super(props);

        // initial state
        this.state = {
            cnt: this.props.num1 || 0
        };
    }

    increment = () => {
        this.setState({
            cnt: this.state.cnt + 1
        });
    };

    decrement = () => {
        this.setState({
            cnt: this.state.cnt - 1
        });
    };

    render() {
        return (
            <>
                <h2>Counter App</h2>

                <p>Count: {this.state.cnt}</p>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        );
    }
}