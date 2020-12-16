import React, { useRef } from 'react';
import './App.css';
import Header from './Components/HeaderComponent/Header'
import { Row, Col } from 'react-bootstrap'
import Particles from 'react-particles-js';
import Navegacion from './Components/NavComponent/Nav'
import Section from './Components/SectionComponent/Section'
import Aside from './Components/AsideComponent/Aside'
import AboutMe from './Components/AboutMeComponent/AboutMe'
import Services from './Components/ServicesComponent/Services'
import Form from "./Components/FormComponent/Form"
import Footer from "./Components/FooterComponent/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const AboutMeRef = useRef(null)
  const ServicesRef = useRef(null)
  const FooterRef = useRef(null)


  const scrollTo = ref => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })
  }

  return (
    <>
      <div id="fondo-black">
        <Navegacion
          scrollTo={scrollTo}
          AboutMeRef={AboutMeRef}
          ServicesRef={ServicesRef}
          FooterRef={FooterRef}
        />

        <div id="colorFondo">
          <Particles className="particles"
            params={{


              particles: {
                number: {
                  value: 200,
                  density: { enable: true, value_area: 800 }
                },

                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  }, polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false
                  }
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                  }
                }
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: false,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                  },
                  repulse: {
                    distance: 400,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true


            }}
          />

          <Header />

          <div className="container-fluid content ">
          <Row >

            <Col xl={8}>
              <Section />
            </Col>

            <Col xl={4}>

              <div className="cont">
                <Form />
                <Aside />
              </div>
            </Col>

          </Row>
          </div>

          <div ref={AboutMeRef}> </div>

          <AboutMe />

        </div>



        <div ref={ServicesRef}> </div>
        <div id="fondo-white">
          <div className="index">
            <Services />

            <Particles className="particles-black"
              params={{


                particles: {
                  number: {
                    value: 200,
                    density: { enable: true, value_area: 800 }
                  },

                  color: {
                    value: "black"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    }, polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 1,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0,
                      sync: false
                    }
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 4,
                      size_min: 0.3,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 600
                    }
                  }
                },
                interactivity: {
                  detect_on: "window",
                  events: {
                    onhover: {
                      enable: false,
                      mode: "bubble"
                    },
                    onclick: {
                      enable: true,
                      mode: "repulse"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 250,
                      size: 0,
                      duration: 2,
                      opacity: 0,
                      speed: 3
                    },
                    repulse: {
                      distance: 400,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true


              }}
            />
          </div>

          <div ref={FooterRef}></div>

          <div className="index-2 ">
            <Footer />
          </div>

        </div>
      </div>
    </>
  );
}


export default App;
