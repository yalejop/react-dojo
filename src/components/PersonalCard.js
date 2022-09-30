import React from "react";

class PersonalCard extends React.Component {

    render() {
        const {firstName, lastName, age, hairColor} = this.props

        return (
            <div className="container card mb-3">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
    

}


export default PersonalCard