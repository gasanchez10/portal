import React from 'react'
import Link from 'gatsby-link'
import '../styles/index.css'
import {Button, Col,Row} from 'react-bootstrap'
import Elemento from './elemento.js'

// IMAGENES

import nosotros from '../images/nosotros.jpg'
import aboutus from '../images/aboutus.jpg'
import tecnologias from '../images/tecnologias.jpg'
import news from '../images/news.png'
import innovacion from '../images/innovacion.jpg'
import calendario from '../images/calendario.jpg'
import idea from '../images/idea.jpg'
import contact from '../images/contact.jpg'
import bvc from '../images/bvc.jpg'
import bombillo from '../images/limon.png'



const IndexPage = () => (
  <div>
  <Col lg={5} className="deletePadding">
    <div className="portal">
    <img src={bvc} className="custom"/> 
    <img src={bombillo} className="custom2"/> 
    </div>
</Col>
<Col lg={7} className="deletePadding">

    <Row>
     <Elemento  img={aboutus} class="primero" colSize={6}  desc="About Us"/>
     <Elemento  img={tecnologias} class="primero" colSize={6} desc="Tecnologías" />
    </Row>
 <Row>
 <Elemento  img={nosotros} class="primero" colSize={8} desc="Nosotros"/>
 <Elemento  img={news} class="primero" colSize={4} desc="Noticias"/>
 </Row>
 <Row>    
    <Elemento  img={innovacion} class="primero" colSize={4} desc="Opina"/>
    <Elemento  img={calendario} class="primero" colSize={4} desc="Calendario"/>
    <Elemento  img={contact} class="primero" colSize={4} desc="Contacto"/>
    </Row>
    <Row>
    <Elemento  img={idea} class="primero" colSize={12} desc="Desarrollamos la idea que propongas"/>
    </Row>

    </Col>

  </div>
)

export default IndexPage
