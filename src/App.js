import React from "react";
import PersonalCard from "./components/PersonalCard";

class App extends React.Component {

  render() {
    return (
      <div className="container mt-4">
        <PersonalCard firstName = 'Jane' lastName = 'Doe' age = {45} hairColor = 'Black'/>
        <PersonalCard firstName = 'John' lastName = 'Smith' age = {88} hairColor = 'Brown'/>
        <PersonalCard firstName = 'Millard' lastName = 'Fillmore' age = {50} hairColor = 'Brown'/>
        <PersonalCard firstName = 'Maria' lastName = 'Smith' age = {62} hairColor = 'Brown'/>
      </div>
    );
  }



}

export default App;
