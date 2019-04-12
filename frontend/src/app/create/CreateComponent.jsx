import React, { Component } from 'react';


// TODO: PUT THIS IN ANOTHER FILE
const FractalTree = (ft) => {
  const tree = [];
  ft.props = {};

  ft.setup = () => {
    ft.createCanvas(400, 400);
  };

  ft.draw = () => {
    ft.background(51);
    const start = ft.createVector(ft.width / 2, ft.height);
    const end = ft.createVector(ft.width / 2, ft.height - 100);
    const root = new Branch(ft, start, end, ft.props.angle);
    tree[1] = root;
    for (let i = 1; i < 64; i++) {
      if(!tree[i].finished) {
        const branches = tree[i].branch();
        tree[2*i] = branches[0];
        tree[2*i+1] = branches[1];
        tree[i].finshed = true;
      }
    }
    tree.forEach(branch => {
      branch.show();
    });
  };

  class Branch {
    constructor(ft, start, end, angle) {
      this.ft = ft;
      this.start = start;
      this.end = end;
      this.angle = angle;
      this.finished = false;
    }
  
    show = () => {
      this.ft.stroke(255);
      this.ft.line(this.start.x, this.start.y, this.end.x, this.end.y);
    };
  
    branch = () => {
      const dirLeft = window.p5.Vector.sub(this.end, this.start);
      const dirRight = window.p5.Vector.sub(this.end, this.start);
      dirLeft.rotate(-this.angle);
      dirRight.rotate(this.angle);
      dirLeft.mult(0.67);
      dirRight.mult(0.67);
      const newLeftEnd = window.p5.Vector.add(this.end, dirLeft);
      const newRightEnd = window.p5.Vector.add(this.end, dirRight);
      const left = new Branch(this.ft, this.end, newLeftEnd, this.angle);
      const right = new Branch(this.ft, this.end, newRightEnd, this.angle);
      return [left, right];
    }
  };
};

// TODO: PUT FUNCTIONALITY IN ANOTHER COMPONENT
class CreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: Math.PI / 6,
    }
  }
  componentDidMount() {
    this.fractalTree = new window.p5(FractalTree, 'canvas-container');
    this.fractalTree.props = this.state;
  }
  
  componentWillUnmount() {
    this.fractalTree.remove();
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.fractalTree.props = nextState;
    return true;
  }

  onAngleChange = event => {
    const angle = Number(event.target.value);
    this.setState(() => ({ angle }));
  };

  render() {
    return (
      <div style={{position: 'absolute', display: 'flex', flexDirection: 'column' }}>
        <div id="canvas-container" >
        </div>
        <div >
          <input onChange={this.onAngleChange} type="range" id="angle" name="angle" min={0} max={2 * Math.PI} value={this.state.angle} step={0.01}/>
            <label htmlFor="angle">Angle</label>
        </div>
      </div>
    )
  }
}

export default CreateComponent;
