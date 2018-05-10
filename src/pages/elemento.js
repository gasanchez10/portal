import React from 'react';
import {Button, Col,Row} from 'react-bootstrap'
import '../styles/index.css'

class Elemento extends React.Component {
  constructor(props) {super(props);this.state = {};}
  render() {
    return (
      <Col lg={this.props.colSize} className="deletePadding">
        <div className={this.props.class}>
          <div className="test"> </div> 
           <img src={this.props.img} className="alargar"/> 
           <p className="prueb" >{this.props.desc}</p>
        </div>
      </Col>
   );
  }
}
export default Elemento;


