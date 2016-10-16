import React from 'react';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = { count: 400 };
    }

    increment() {
        this.setState({
            count: this.state.count + 2
        });
    }

    render(){
        return (
            <div className="jumbotron">
                <h2> React Powered counter </h2>
                <h1> { this.state.count } </h1>
                <p className="lead"> Here it goes </p>
                <button className="btn btn-lg btn-success" onClick={ ()=> this.increment() }>Increment </button>
            </div>
        );
    }

}
