import React, { Component } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

const SwatchWrapper = styled.div`
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  margin-right: 1rem;
  margin-top: 1rem;
`;

const Swatch = styled.div`
  border-radius: 2px;
  height: 14px;
  width: 36px;
`;

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;

const Cover = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

class ColorPickerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayColorPicker: false,
    }
  }

  onColorPickerClick = () => {
    this.setState(() => ({
      displayColorPicker: !this.state.displayColorPicker,
    }));
  }

  onColorPickerClose = () => {
    this.setState(() => ({
      displayColorPicker: false,
    }));
  }

  onChange = (color, event) => {
    this.props.onChange(color, event, this.props.value);
  }

  render() {
    return (
      <React.Fragment>
        <SwatchWrapper onClick={this.onColorPickerClick}>
            <Swatch style={{background: this.props.color}}/>
          </SwatchWrapper>
          {this.state.displayColorPicker && (
            <Popover>
              <Cover onClick={this.onColorPickerClose}/>
              <ChromePicker
                color={this.props.color}
                onChange={this.onChange}
              />
            </Popover>
          )}
      </React.Fragment>
    )
  }
};

export default ColorPickerComponent;
