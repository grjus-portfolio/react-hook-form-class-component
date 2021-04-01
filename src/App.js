import React, { Component } from "react";
import MainComponent from "./components/MainContainer";
import FormWrapper from "./components/Form";
import Person from "./components/DelegatePerson";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delegates: []
    };
  }

  render() {
    return (
      <>
        <MainComponent title="Input data">
          <FormWrapper
            handleData={(data) =>
              this.setState({
                delegates: [
                  ...this.state.delegates,
                  { ...data, id: new Date().valueOf() }
                ]
              })
            }
          />
        </MainComponent>
        <MainComponent title="List of delegates">
          {this.state.delegates.map((person) => (
            <Person key={person.id} {...person} />
          ))}
        </MainComponent>
      </>
    );
  }
}

export default App;
