import React, { Component } from "react";
import { Container, FormRow } from "./style";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";


class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      firstName:"",
      lastName:"",
      age:null,
      city:""
    }
    const { register,handleSubmit,  reset} = this.props;
    this.register = register
    this.handleSubmit = handleSubmit
    this.reset = reset
  }



  submitData = (data) => {
    this.setState({
      ...data
    })
    this.props.handleData(data)
    this.reset()
  };

  render() {

    const {errors} = this.props
    
    return (
      <Container>
        <FormRow>
          <TextField
            name="firstName"
            error={errors.firstName&&true}
            helperText={errors.firstName?.message}
            inputRef={this.register({
              required: {
                value: true,
                message: "First name is required"
              }
            })}
            label="First name" variant="outlined"
          />
          <TextField
            name="lastName"
            error={errors.lastName&&true}
            helperText={errors.lastName?.message}
            inputRef={this.register({
              required: {
                value: true,
                message: "Last name is required"
              }
            })}
            label="Last name" variant="outlined"
          />
        </FormRow>
        <FormRow>
          <TextField
            name="age"
            error={errors.age&&true}
            helperText={errors.age?.message}
            inputRef={this.register({
              required: {
                value: true,
                message: "Age is required"
              },
              min:{
                value:18,
                message:"Only adults are allowed"
              }
            })}
            label="Age" variant="outlined"
          />
          <TextField
            name="city"
            error={errors.city&&true}
            helperText={errors.city?.message}
            inputRef={this.register({
              required: {
                value: true,
                message: "City is required"
              }
            })}
            label="City" variant="outlined"
          />
        </FormRow>
        <FormRow>
        <Button onClick={this.handleSubmit(this.submitData)} variant="contained">Submit form</Button>
        </FormRow>
      </Container>
    );
  }
}

const FormWrapper = (props) => {
  const form  = useForm({
    defaultValues:{
      firstName:"",
      lastName:"",
      city:"",
      age:""
    }
  })
  return <Form {...form} {...props}/>
};

export default FormWrapper;
