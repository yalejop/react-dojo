import React from "react";

const PersonalCard = ({firstName, lastName, age, hairColor}) => {
    
    return (
        <div className="container card mb-3">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            {/* <button className="btn btn-success">Birthday Button for {firstName} {lastName}</button> */}
        </div>
    );
};


export default PersonalCard