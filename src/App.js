import React, { Component, createRef } from "react";
import MainComponent from "./components/MainContainer";
import FormWrapper from "./components/Form";
import Person from "./components/DelegatePerson";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delegates: [],
      suppresedDelegates: []
    };
    this.delegateRef = createRef(null);
  }

  handleClickDelegate = (e) => {
    const htmlContainer = e.target.closest(".container");
    htmlContainer.classList.toggle("strike");
    const htmlContainerKey = parseInt(htmlContainer.dataset.key, 10);
    const delegatesUpdate = this.state.delegates.map((person) => {
      if (htmlContainer.classList.contains("strike")) {
        if (person.id === htmlContainerKey) {
          person.absence = true;
        }
      } else {
        if (person.id === htmlContainerKey) {
          person.absence = false;
        }
      }

      return person;
    });
    this.setState({
      ...this.state,
      delegates: delegatesUpdate
    });
  };

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
        <MainComponent ref={this.delegateRef} title="List of delegates">
          {this.state.delegates.map((person) => (
            <Person
              onClick={this.handleClickDelegate}
              key={person.id}
              {...person}
            />
          ))}
        </MainComponent>
        <MainComponent title="Export delegates" />
      </>
    );
  }
}

export default App;
