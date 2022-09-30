import React from "react";

class PersonalCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edad: this.props.age
        }
    }

    birthday = () => {
        this.setState({edad : this.state.edad+1})
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props

        return (
            <div className="container card mb-3">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.edad}</p>
                <p>Hair Color: {hairColor}</p>
                <button className="btn btn-success" onClick={this.birthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
    

}


export default PersonalCard