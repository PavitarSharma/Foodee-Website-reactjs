import React from 'react'
import './Menu'
import { Container, Row, Col } from 'react-bootstrap'

const Menu = () => {
  return (
    <section id="about">
      <Container fluid className="about-page">
        <Row>
  
          <Col className="col-lg-6 col-md-12">
            <div className="title">
              <p>About Us</p>
              <div />
            </div>

            <div className="about">
              <div className="about-title d-flex align-items-center">
                <p className="fst-italic fw-bold first-letter">F</p>
                <p>
                  ar far away, behind the word mountains, 
                  far from the countries Vokalia and Consonantia, there live the
                </p>
              </div>
              <p>
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                a large language ocean. Far far away, behind the word mountains, far from the countries 
                Vokalia and Consonantia, there live the blind texts. A small river named Duden flows by 
                their place and supplies it with the necessary regelialia. It is a paradisematic country, 
                in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has 
                no control about the blind texts it is an almost unorthographic life.
              </p>
            </div>
            <a href="#about">Get In Touch</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Menu