import React, { Component } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import FractalTree from './FractalTree';
import { Button, ButtonSecondary, SaveModal } from '../../common';

const FractalTreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
`;

const Canvas = styled.div`
  margin: auto;
`;

const ButtonWrapper = styled(Button)`
  margin: auto;
  margin-top: 1rem;
`;

const ButtonSecondaryWrapper = styled(ButtonSecondary)`
  margin: auto;
  margin-top: 1rem;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 3rem;
  max-width: 40rem;
  padding: 0 2rem 0 2rem;
  width: 100%;
`;

const SettingsTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 0;
  text-align: center;
`;

const SettingTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0;
  margin-top: 1rem;
`;

const SettingInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SettingInput = styled.input`
  width: 80%;
`;

const SettingValue = styled.p`
  font-size: 2rem;
`;

const SwatchWrapper = styled.div`
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  cursor: pointer;
  display: inline-block;
  padding: 5px;
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

class FractalTreeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: Math.round(Math.PI / 6 * 100)/100,
      levels: 3,
      length: 100,
      thickness: 1,
      backgroundColor: '#545454',
      displayBackgroundColorPicker: false,
      treeColor: '#fff',
      displayTreeColorPicker: false,
      modalIsOpen: false,
    }
  }

  componentDidMount() {
    this.fractalTree = new window.p5(FractalTree, 'canvas-container');
    this.fractalTree.props = this.state;
  }
  
  componentWillUnmount() {
    this.fractalTree.remove();
  }

  componentDidUpdate() {
    this.fractalTree.props = this.state;
  }

  onDownloadClick = () => {
    this.fractalTree.download();
  }

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  };

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }));
  }

  onAngleChange = event => {
    const angle = Number(event.target.value);
    this.setState(() => ({ angle }));
  };

  onLevelsChange = event => {
    const levels = event.target.value;
    this.setState(() => ({ levels }));
  }

  onLengthChange = event => {
    const length = event.target.value;
    this.setState(() => ({ length }));
  }

  onThicknessChange = event => {
    const thickness = event.target.value;
    this.setState(() => ({ thickness }));
  }

  onBackgroundColorPickerClick = () => {
    this.setState(() => ({
      displayBackgroundColorPicker: !this.state.displayBackgroundColorPicker,
    }));
  }

  onBackgroundColorPickerClose = () => {
    this.setState(() => ({
      displayBackgroundColorPicker: false,
    }));
  }

  onBackgroundColorChange = color => {
    this.setState({ backgroundColor: color.hex });
  }
  
  onTreeColorPickerClick = () => {
    this.setState(() => ({
      displayTreeColorPicker: !this.state.displayTreeColorPicker,
    }));
  }

  onTreeColorPickerClose = () => {
    this.setState(() => ({
      displayTreeColorPicker: false,
    }));
  }

  onTreeColorChange = color => {
    this.setState({ treeColor: color.hex });
  }

  render() {
    return (
      <FractalTreeWrapper>
        <Title>Fractal Tree</Title>
        <Canvas id="canvas-container" />
        <ButtonWrapper onClick={this.onDownloadClick}>Download</ButtonWrapper>
        <ButtonSecondaryWrapper onClick={this.openModal}>Save to Profile</ButtonSecondaryWrapper>
        <SaveModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentlabel="Save Fractal"
        />
        <Settings>
          <SettingsTitle>Settings:</SettingsTitle>

          <SettingTitle>Background Color:</SettingTitle>
          <div>
            <SwatchWrapper onClick={this.onBackgroundColorPickerClick}>
              <Swatch style={{background: this.state.backgroundColor}}/>
            </SwatchWrapper>
            {this.state.displayBackgroundColorPicker && (
              <Popover>
                <Cover onClick={this.onBackgroundColorPickerClose}/>
                <ChromePicker
                  color={this.state.backgroundColor}
                  onChange={this.onBackgroundColorChange}
                />
              </Popover>
            )}
          </div>
          
          <SettingTitle>Tree Color:</SettingTitle>
          <div>
            <SwatchWrapper onClick={this.onTreeColorPickerClick}>
              <Swatch style={{background: this.state.treeColor}}/>
            </SwatchWrapper>
            {this.state.displayTreeColorPicker && (
              <Popover>
                <Cover onClick={this.onTreeColorPickerClose}/>
                <ChromePicker
                  color={this.state.treeColor}
                  onChange={this.onTreeColorChange}
                />
              </Popover>
            )}
          </div>

          <SettingTitle>Angle:</SettingTitle>
          <SettingInputWrapper>
            <SettingInput
              onChange={this.onAngleChange}
              type="range"
              min={0}
              max={2 * Math.PI}
              value={this.state.angle}
              step={0.01}
            />
            <SettingValue>{Math.round(this.state.angle * 180 / Math.PI)}&deg;</SettingValue>
          </SettingInputWrapper>
          
          <SettingTitle>Levels:</SettingTitle>
          <SettingInputWrapper>
            <SettingInput
              onChange={this.onLevelsChange}
              type="range"
              min={1}
              max={8}
              value={this.state.levels}
              step={1}
            />
            <SettingValue>{this.state.levels}</SettingValue>
          </SettingInputWrapper>

          <SettingTitle>Length:</SettingTitle>
          <SettingInputWrapper>
            <SettingInput
              onChange={this.onLengthChange}
              type="range"
              min={100}
              max={500}
              value={this.state.length}
              step={5}
            />
            <SettingValue>{this.state.length}</SettingValue>
          </SettingInputWrapper>

          <SettingTitle>Thickness:</SettingTitle>
          <SettingInputWrapper>
            <SettingInput
              onChange={this.onThicknessChange}
              type="range"
              min={1}
              max={10}
              value={this.state.thickness}
              step={1}
            />
            <SettingValue>{this.state.thickness}</SettingValue>
          </SettingInputWrapper>
        </Settings>
      </FractalTreeWrapper>
    )
  }
}

export default FractalTreeComponent;
