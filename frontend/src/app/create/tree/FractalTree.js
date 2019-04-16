const FractalTree = (ft) => {
  
  ft.props = {};

  ft.setup = () => {
    ft.createCanvas(400, 400);
  };

  ft.draw = () => {
    const backgroundColor = ft.props.backgroundColor ? ft.props.backgroundColor : 51;
    ft.background(backgroundColor);
    const start = ft.createVector(ft.width / 2, ft.height);
    const end = ft.createVector(ft.width / 2, ft.height - ft.props.length);
    const root = new Branch(ft, start, end, ft.props.angle);
    const tree = [];
    tree[1] = root;
    const levels = Math.pow(2, ft.props.levels);
    for (let i = 1; i < levels; i++) {
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
      this.ft.strokeWeight(this.ft.props.thickness);
      const treeColor = ft.props.treeColor ? ft.props.treeColor : 255;
      this.ft.stroke(treeColor);
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

export default FractalTree;