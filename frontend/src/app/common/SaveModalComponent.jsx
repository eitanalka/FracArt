import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal, Form , FormInput, FormError, Button } from '.';

const StyledButton = styled(Button)`
  padding: 1rem;
  width: 21rem;
`;

class SaveModalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      error: '',
    }
  }

  onTitleChange = event => {
    const title = event.target.value;
    this.setState(() => ({ title }));
  }

  onSubmit = event => {
    event.preventDefault();

    const { title }= this.state;

    if(title.length > 50) {
      return this.setState(() => ({
        error: 'Title must be at most 50 characters.'
      }));
    }
    this.setState(() => ({ error: '' }));
    
    const { googleToken, settings } = this.props;
    this.props.saveFractal(googleToken, title, settings);
    this.props.onRequestClose();
  }
  
  render() {
    return (
      <Modal {...this.props}>
        <Form onSubmit={this.onSubmit}>
          {this.state.error && (
            <FormError>{this.state.error}</FormError>
          )}
          <FormInput 
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
            autofocus
            required
          />
          <StyledButton>Save Fractal</StyledButton>
        </Form>
      </Modal>
    );
  }
};

export default SaveModalComponent;