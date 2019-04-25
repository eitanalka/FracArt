const Mandelbrot = (mb = {}) => {
  let xZoomStart = 0;
  let xZoomEnd = 1000;
  let yZoomStart = 0;
  mb.props = {
    colors: {},
  };

  mb.setup = () => {
    mb.createCanvas(1000, 1000);
    mb.colorMode(mb.RGB, 1);
    mb.pixelDensity(1);
  };

  mb.draw = () => {
    if(mb.props.started && mb._setupDone) {
      mb.loadPixels();
      const maxiterations = mb.props.iterations;
      const minX = mb.props.minX;
      const maxX = mb.props.maxX;
      const minY = mb.props.minY;
      const maxY = minY+(maxX-minX)*mb.height/mb.width;
      mb.props.maxY = maxY;
      for (let x = 0; x < mb.width; x++) {
        for (let y = 0; y < mb.height; y++) {
  
          let a = mb.map(x, 0, mb.width, minX, maxX);
          let b = mb.map(y, 0, mb.height, minY, maxY);
  
          let ca = a;
          let cb = b;
  
          let n = 0;
  
          while (n < maxiterations) {
            let newA = a * a - b*b;
            let newB = 2 * a * b;
  
            a = newA + ca;
            b = newB + cb;
  
            if (mb.abs(newA + newB) > 50) {
              break;
            }
            n++;
          }
  
          let color = mb.props.colors[n%mb.props.colors.length];
          
          if (n === maxiterations) {
            color = mb.props.mainColor;
          }
  
          let pix = (x + y * mb.width) * 4;
          mb.pixels[pix + 0] = color[0];
          mb.pixels[pix + 1] = color[1];
          mb.pixels[pix + 2] = color[2];
          mb.pixels[pix + 3] = 255;
        }
      }
      mb.updatePixels();
      mb.noLoop();
    }
  };

  mb.mousePressed = () => {
    if(mb.mouseX >= 0 && mb.mouseX <= 1000 && mb.mouseY >= 0 && mb.mouseY <= 1000) {
      xZoomStart = mb.mouseX;
      yZoomStart = mb.mouseY;
    }
  }

  mb.mouseReleased = () => {
    if(mb.mouseX >= 0 && mb.mouseX <= 1000 && mb.mouseY >= 0 && mb.mouseY <= 1000) {
      xZoomEnd = mb.mouseX;
      const xScaleDist = mb.props.maxX - mb.props.minX;
      const yScaleDist = mb.props.maxY - mb.props.minY;
      const xScale = xScaleDist / mb.width;
      const yScale = yScaleDist / mb.height;
      mb.props.minX = mb.props.minX + xZoomStart * xScale;
      mb.props.maxX = mb.props.minX + xZoomEnd * xScale;
      mb.props.minY = mb.props.minY + yZoomStart * yScale;
      mb.draw();
    }
  }

  mb.download = () => {
    mb.saveCanvas('Mandlebrot', 'png');
  }
};

export default Mandelbrot;
