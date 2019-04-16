import React, { Component } from 'react';
import styled from 'styled-components';
import FractalTree from './FractalTree';

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

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 40rem;
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

class FractalTreeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: Math.round(Math.PI / 6 * 100)/100,
      levels: 3,
      length: 100,
      thickness: 1,
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

  render() {
    return (
      <FractalTreeWrapper>
        <Title>Fractal Tree</Title>
        <Canvas id="canvas-container" />
        <Settings>
          <SettingsTitle>Settings:</SettingsTitle>

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
