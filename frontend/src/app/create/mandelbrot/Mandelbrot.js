const Mandelbrot = (mb = {}) => {
  
  mb.props = {
    colors: {},
  };

  mb.setup = () => {
    mb.createCanvas(1000, 1000);
    mb.colorMode(mb.RGB, 1);
    mb.pixelDensity(1);
  };

  mb.draw = () => {
    if(mb.props.started) {
      const maxiterations = mb.props.iterations;
  
      mb.loadPixels();
      for (let x = 0; x < mb.width; x++) {
        for (let y = 0; y < mb.height; y++) {
  
          let a = mb.map(x, 0, mb.width, -2, 2);
          let b = mb.map(y, 0, mb.height, -2, 2);
  
          let ca = a;
          let cb = b;
  
          let n = 0;
  
          while (n < maxiterations) {
            let newA = a * a - b*b;
            let newB = 2 * a * b;
  
            a = newA + ca;
            b = newB + cb;
  
            if (mb.abs(newA + newB) > 16) {
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

  mb.download = () => {
    mb.saveCanvas('Mandlebrot', 'png');
  }

  
};

export default Mandelbrot;
