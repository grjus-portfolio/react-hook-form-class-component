import React, { Component } from "react";
import { Container, FormRow } from "./style";
import { TextBox } from "@material-ui/core";
import { useForm } from "react-hook-form";

class Form extends Component {
  submitData = (data) => {
    console.log(data);
  };

  render() {
    const { register } = this.props.form;
    return (
      <Container>
        <FormRow>
          <TextBox
            name="firstName"
            inputRef={register({
              required: {
                value: true,
                message: "First name is required"
              }
            })}
            variant="contained"
          />
        </FormRow>
      </Container>
    );
  }
}

const FormWrapper = () => {};
