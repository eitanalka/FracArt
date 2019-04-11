import React from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 1500
          }
        },
        line_linked: {
          enable: true,
          opacity: 0.02
        },
        move: {
          direction: 'right',
          speed: 0.05
        },
        size: {
          value: 2
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05
          }
        }
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: 'push'
          }
        },
        modes: {
          push: {
            particles_nb: 1
          }
        }
      },
      retina_detect: true
    }}
    height={'100vh'}
    width={'100vw'}
  />
);

export default ParticlesComponent;
