import React, { useRef, useState } from 'react';
import './index.css';
import Header from './Components/HeaderComponent/Header'
import { Row, Col } from 'react-bootstrap'
import Particles from 'react-particles-js';
import Navegacion from '../../Components/NavComponent/Nav'
import Section from './Components/SectionComponent/Section'
import Aside from './Components/AsideComponent/Aside'
import AboutMe from './Components/AboutMeComponent/AboutMe'
import Services from './Components/ServicesComponent/Services'
import Form from "./Components/FormComponent/Form"
import Footer from "./Components/FooterComponent/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import particleConfig from './Configs/particleConfig'


const HomeScreen = () => {

  const AboutMeRef = useRef(null)
  const ServicesRef = useRef(null)
  const FooterRef = useRef(null)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [amount, setAmount] = useState()
  const [projectDescription, setProjectDescription] = useState()

  const scrollTo = ref => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })
  }

  return (
      <div id="fondo-black">
        <Navegacion
          scrollTo={scrollTo}
          AboutMeRef={AboutMeRef}
          ServicesRef={ServicesRef}
          FooterRef={FooterRef}
        />
        <div id="colorFondo">
          <Particles className="particles"
            params={particleConfig('#ffffff')}
          />
          <Header />
          <div className="container-fluid content  ">
          <Row >
            <Col xl={8}>
              <Section />
            </Col>
            <Col xl={4}>
              <div className="cont">
                <Form name={name} setName={setName} email={email} setEmail={setEmail} scrollTo={scrollTo} FooterRef={FooterRef}/>
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
              params={particleConfig('black')}
            />
          </div>
          <div ref={FooterRef}></div>
          <div className="index-2 ">
            <Footer 
              name={name} 
              setName={setName} 
              email={email} 
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              amount={amount}
              setAmount={setAmount}
              projectDescription={projectDescription}
              setProjectDescription={setProjectDescription}
            />
          </div>
        </div>
      </div>
  );
}

export default HomeScreen