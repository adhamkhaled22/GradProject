import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import Sidebar from './Components/Sidebar';
import "survey-react/survey.css";
import SurveyModel from './surveyContent'
import { Container, Row, Col } from "react-bootstrap";

var json = SurveyModel
class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }

  render() {
    
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div>The component after onComplete event</div>
    ) : null;
    return (
      <Container fluid className="py-4">
    <Row>
    <Sidebar />
      <Col md={9}>
      <Container>
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
      </Container>
      </Col>
      </Row>
      </Container>
    );
  }
}

export default SurveyComponent