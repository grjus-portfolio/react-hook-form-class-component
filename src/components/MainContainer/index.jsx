import React, { Component } from 'react';
import {Container, Legend} from "./style"

export default class MainComponent extends Component {
    render() {
        const {children, title} = this.props
        return (
            <Container>
                <Legend>{title}</Legend>
                {children}
            </Container>
        )
    }
}
