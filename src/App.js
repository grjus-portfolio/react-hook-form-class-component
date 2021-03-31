import React, {Component} from "react";
import MainComponent from "./components/MainContainer"
import FormWrapper from "./components/Form"

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      delegates:[]
    }
  }

  componentDidUpdate(){
    console.log(this.state)
  }



  render(){
    return(
      <>
      <MainComponent title="Input data">
      <FormWrapper handleData = {data=>this.setState({
        delegates:[...this.state.delegates,{...data, id:new Date().valueOf()}]
      })}/>
      </MainComponent>
      <MainComponent title="List of delegates">
        <p>asdasd</p>
      </MainComponent>
      </>
    )
  }

}


export default App;
