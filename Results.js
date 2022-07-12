import React from 'react';
import "./App.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Container, Row, Col, Button,Image } from "react-bootstrap";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import { Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

const Results = () => {
    const percentage = 25;
  const percentage1 = 50;
  const percentage2 = 30;
  const percentage3 = 66;
  const data = [
    { name: "p1", users: 1700 },
    { name: "p2", users: 1300 },
    { name: "p3", users: 100 },
    { name: "p4", users: 200 },
    { name: "p5", users: 400 },
    { name: "p6", users: 600 },
    { name: "p7", users: 100 },
    { name: "p8", users: 1100 },
    { name: "p9", users: 300 },
    { name: "p10", users: 100 },
    { name: "p11", users: 600 },
    { name: "p12", users: 700 },
  ];
  return (
    <Container fluid className="py-4">
    <Row>
    <Sidebar />
      <Col md={9}>
        <Container>
          <Row>
            <Col md={12}  className="topname"><p>Adham Khaled </p> <span>Doctor</span></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={4} className="chartcontainer">
              <div className="withborder">
              <p className="ChartTit">Staging Result</p>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(102, 51, 153), ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
            
            />
            </div>
            </Col>

            <Col md={8} className="chartcontainer">
              <div>
              <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="users"
                  fill="#FFC0CB"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={4} className="chartcontainer pt-0">
              <div  className="withborder">
              <p className="ChartTit">Protcol1</p>
              <CircularProgressbar
                value={percentage}
                text={`${percentage1}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(102, 51, 153), ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              </div>
            </Col>
            <Col md={4} className="chartcontainer  pt-0">
              <div className="withborder">
               <p className="ChartTit">Protcol2</p>
              <CircularProgressbar
                value={percentage}
                text={`${percentage2}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(102, 51, 153), ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              </div>
            </Col>
            <Col md={4} className="chartcontainer pt-0">
              <div className="withborder">
              <p className="ChartTit">Protcol3</p>
              <CircularProgressbar
                value={percentage}
                text={`${percentage3}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(102, 51, 153), ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
  )
}

export default Results