import React from 'react'
import './TopHeader.css'
import { Container, Row, Col } from 'react-bootstrap'

const TopHeader = () => {
  return (
    <div className="topHeader">
        <Container>
          <Row>
            <Col className="text-orange">Hello</Col>
          </Row>
        </Container>
    </div>
  )
}

export default TopHeader