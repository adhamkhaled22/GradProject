import React from 'react'
import "./App.css";
import Sidebar from './Components/Sidebar';
import { Table } from 'react-bootstrap';
import { Container, Row, Col, Button,Image } from "react-bootstrap";
import ReactBarChart from './Components/ReactBarChart';

function Home() {
  return (
    <div>
    <Container fluid className="py-4">
        <Row>
        <Sidebar />
          <Col md={9}>
            <Container>
              
              <Row className='p-4'>
                <Col sm={3}  className="withborder">
                <div className='header-item boarder boarder-dark'>
                    <Row>

                    <Col sm={7}> 
                    <p className="ChartTit">Treated Patients</p><span className='ChartTit'>2000</span>
                      
                    </Col>
                    <Col sm={5}>
                      <span>ic</span>
                    </Col>
                    </Row>
                  </div>
                  </Col>
                  <Col sm={3}  className="">
                  <div className='header-item shad-box'>
                    <Row>

                    <Col sm={7}> 
                    <p className="ChartTit">Avaliable Beds</p><span className='ChartTit'>7</span>
                    </Col>
                    <Col sm={5}>
                      <span>ic</span>
                    </Col>
                    </Row>
                  </div>
                  </Col>
                  <Col sm={3}  className="">
                  <div className='header-item shad-box'>
                    <Row>

                    <Col sm={7}> 
                    <p className="ChartTit">Survival Rate</p><span className='ChartTit'>70%</span>
                    </Col>
                    <Col sm={5}>
                      <span>ic</span>
                    </Col>
                    </Row>
                  </div>
                  </Col>
                  <Col sm={3}  className="">
                  <div className='header-item shad-box'>
                    <Row>

                    <Col sm={7}> 
                    <p className="ChartTit">Mortality Rate</p><span className='ChartTit'>20%</span> 
                    </Col>
                    <Col sm={5}>
                      <span>ic</span>
                    </Col>
                    </Row>
                  </div>
                  </Col>
              </Row>
              <Row className='p-4'>
                <Col sm={7}  className="">
                <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                  
                  </Col>
                  <Col sm={5}  className="">
                  <div className='header-item shad-box'>
                 
                  </div>
                  </Col>
              </Row>
              <Row className='p-4'>
                <Col sm={6}  className="">
                  <div className='header-item shad-box'>
                  <ReactBarChart />
                  </div>
                  </Col>
                  <Col sm={6}  className="">
                  <div className='header-item shad-box'>
                    <ReactBarChart />
                  </div>
                  </Col>
              </Row>
            </Container>
            </Col>
            </Row>
            </Container>
           </div>
  )
}

export default Home