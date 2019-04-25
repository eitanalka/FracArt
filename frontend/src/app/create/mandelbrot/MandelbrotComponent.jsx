import React, { Component } from 'react';
import styled from 'styled-components';
import Mandelbrot from './Mandelbrot';
import { Button, ButtonSecondary, SaveModal, ColorPicker } from '../../common';

const MandelbrotWrapper = styled.div`
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

const Subtitle = styled.h2`
  font-size: 3rem;
  margin-top: 0;
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

const SettingValue = styled.input`
  font-size: 2rem;
  max-width: 10rem;
`;

class MandelbrotComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {
        colors: [
          [66, 30, 15],
          [9, 1, 47],
          [0, 7, 100],
          [25, 7, 26],
          [57, 125, 209],
          [211, 236, 248],
          [248, 201, 95],
          [255, 170, 0],
        ],
        colorsHex: [
          '#421e0f',
          '#09012f',
          '#09012f',
          '#19071a',
          '#397dd1',
          '#d3ecf8',
          '#f8c95f',
          '#ffaa00',
        ],
        mainColor: [0, 0, 0],
        mainColorHex: '#000000',
        minX: -2.0,
        maxX: 1.0,
        minY: -1.2,
        started: true,
        iterations: 100,
        type: 'mandelbrot',
      },
      modalIsOpen: false,
      didUpdateSettings: false,
      displayColor0Picker: false,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if(id) {
      this.props.getFractal(id);
    }
    this.mandelbrot = new window.p5(Mandelbrot, 'canvas-container');
    this.mandelbrot.props = this.state.settings;
    this.mandelbrot.draw();
  }
  
  componentWillUnmount() {
    this.props.resetSettings();
    this.mandelbrot.remove();
  }

  componentDidUpdate() {
    const { settings } = this.props;
    if(settings && Object.keys(settings).length && !this.state.didUpdateSettings) {
      this.mandelbrot.props = settings;
      this.mandelbrot.draw();
      this.setState(() => ({ settings, didUpdateSettings: true }));
    }
  }

  onDownloadClick = () => {
    this.mandelbrot.download();
  }

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  };

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }));
  }

  regenerate = () => {
    this.mandelbrot.remove();
    this.mandelbrot = new window.p5(Mandelbrot, 'canvas-container');
    this.mandelbrot.props = this.state.settings;
    this.mandelbrot.draw();
  }

  onBackgroundColorChange = (color, event, value) => {
    const { settings } = this.state;
    const { r, g, b } = color.rgb;
    settings.colors[value] = [r, g, b];
    settings.colorsHex[value] = color.hex; 
    this.setState({ settings });
  }

  onMainColorChange = color => {
    const { settings } = this.state;
    const { r, g, b } = color.rgb;
    settings.mainColor = [r, g, b];
    settings.mainColorHex = color.hex; 
    this.setState({ settings });
  }

  onIterationsChange = event => {
    const iterations = Number(event.target.value);
    const { settings } = this.state;
    settings.iterations = iterations;
    this.setState(() => ({ settings }));
  }
  onMinXChange = event => {
    const minX = Number(event.target.value);
    const { settings } = this.state;
    settings.minX = minX;
    this.setState(() => ({ settings }));
  }
  onMaxXChange = event => {
    const maxX = Number(event.target.value);
    const { settings } = this.state;
    settings.maxX = maxX;
    this.setState(() => ({ settings }));
  }
  
  onMinYChange = event => {
    const minY = Number(event.target.value);
    const { settings } = this.state;
    settings.minY = minY;
    this.setState(() => ({ settings }));
  }

  render() {
    return (
      <MandelbrotWrapper>
        <Title>Mandelbrot</Title>
        <Subtitle>{this.props.title}</Subtitle>
        <Canvas id="canvas-container" />
        <ButtonWrapper onClick={this.onDownloadClick}>Download</ButtonWrapper>
        {this.props.isLoggedIn && (
          <React.Fragment>
            <ButtonSecondaryWrapper onClick={this.openModal}>Save to Profile</ButtonSecondaryWrapper>
            <SaveModal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentlabel="Save Fractal"
              saveFractal={this.props.saveFractal}
              settings={this.state.settings}
              googleToken={this.props.googleToken}
            />
          </React.Fragment>
        )}
        <Settings>
          <SettingsTitle>Settings:</SettingsTitle>
          <ButtonWrapper onClick={this.regenerate}>Regenerate</ButtonWrapper>
          
          <SettingTitle>Background Colors:</SettingTitle>
          <div>
            {this.state.settings.colorsHex.map((color ,index) => (
              <ColorPicker 
                color={color}
                onChange={this.onBackgroundColorChange}
                value={index}
                key={index}
              />
            ))}
          </div>

          <SettingTitle>Main Color:</SettingTitle>
          <div>
          <ColorPicker 
              color={this.state.settings.mainColorHex}
              onChange={this.onMainColorChange}
              value="main"
            />
          </div>

          <SettingTitle>Iterations:</SettingTitle>
          <SettingInputWrapper>
            <SettingInput
              onChange={this.onIterationsChange}
              type="range"
              min={10}
              max={2000}
              value={this.state.settings.iterations}
              step={1}
            />
            <SettingValue
              type="number"
              step={10}
              onChange={this.onIterationsChange}
              value={this.state.settings.iterations}
            />
          </SettingInputWrapper>
          
          <SettingTitle>MinX:</SettingTitle>
          <SettingInputWrapper>
            <SettingInput
              onChange={this.onMinXChange}
              type="range"
              min={-2}
              max={1}
              value={this.state.settings.minX}
              step={.001}
            />
            <SettingValue
              type="number"
              step={.001}
              onChange={this.onMinXChange}
              value={this.state.settings.minX}
            />
          </SettingInputWrapper>
          
          <SettingTitle>MaxX:</SettingTitle>
          <SettingInputWrapper>
            <SettingInput
              onChange={this.onMaxXChange}
              type="range"
              min={0}
              max={1.5}
              value={this.state.settings.maxX}
              step={.001}
            />
            <SettingValue
              type="number"
              step={.001}
              onChange={this.onMaxXChange}
              value={this.state.settings.maxX}
              />
          </SettingInputWrapper>
          
          <SettingTitle>MinY:</SettingTitle>
          <SettingInputWrapper>
            <SettingInput
              onChange={this.onMinYChange}
              type="range"
              min={-1.2}
              max={1.5}
              value={this.state.settings.minY}
              step={.001}
            />
            <SettingValue
              type="number"
              step={.001}
              onChange={this.onMinYChange}
              value={this.state.settings.minY}
            />
          </SettingInputWrapper>
        </Settings>
      </MandelbrotWrapper>
    )
  }
}

export default MandelbrotComponent;
