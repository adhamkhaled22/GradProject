import React , {Component}from 'react';
import './App.css';
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import Sidebar from './Components/Sidebar';
import "survey-react/survey.css";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { render } from '@testing-library/react';

import { Container, Row, Col } from "react-bootstrap";
class Admission extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
    }
    this.oncompletecomponent = this.oncompletecomponent.bind(this);
    }
    oncompletecomponent=() => {
        this.setState({iscompleted:true});
    }
    render(){
        var json=
        {
            "title": "ESI Form",
            "logoPosition": "right",
            "pages": [
             {
              "name": "page1",
              "elements": [
               {
                "type": "text",
                "name": "question1",
                "title": "Name",
                "isRequired": true
               },
               {
                "type": "text",
                "name": "question2",
                "title": "Phone",
                "isRequired": true
               },
               {
                "type": "text",
                "name": "question3",
                "title": "Age",
                "isRequired": true
               },
               {
                "type": "text",
                "name": "question7",
                "title": "Number of Previous Admissions",
                "isRequired": true
               },
               {
                "type": "dropdown",
                "name": "question15",
                "title": "Department Name",
                "choicesFromQuestion": "question11",
                "choices": [
                 "item1",
                 "item2",
                 "item3"
                ]
               },
               {
                "type": "text",
                "name": "question6",
                "title": "Patient's Insusrance"
               },
               {
                "type": "text",
                "name": "question10",
                "title": "Arrival Mode"
               },
               {
                "type": "text",
                "name": "question27",
                "title": "Previous Disposer"
               },
               {
                "type": "dropdown",
                "name": "question4",
                "title": "Cardiac Medications",
                "isRequired": true,
                "choices": [
                 {
                  "value": "item1",
                  "text": "1"
                 },
                 {
                  "value": "item2",
                  "text": "2"
                 },
                 {
                  "value": "item3",
                  "text": "3"
                 },
                 {
                  "value": "item4",
                  "text": "4"
                 },
                 {
                  "value": "item5",
                  "text": "5"
                 },
                 {
                  "value": "item6",
                  "text": "6"
                 },
                 {
                  "value": "item7",
                  "text": "7"
                 },
                 {
                  "value": "item8",
                  "text": "8"
                 },
                 {
                  "value": "item9",
                  "text": "9"
                 },
                 {
                  "value": "item10",
                  "text": "10"
                 },
                 {
                  "value": "item11",
                  "text": "11"
                 },
                 {
                  "value": "item12",
                  "text": "12"
                 }
                ]
               },
               {
                "type": "dropdown",
                "name": "question5",
                "title": " Cardiovascular Medications",
                "choicesFromQuestion": "question4",
                "choices": [
                 "item1",
                 "item2",
                 "item3"
                ]
               },
               {
                "type": "dropdown",
                "name": "question8",
                "title": "Vitamins and Supplements",
                "choicesFromQuestion": "question4",
                "choices": [
                 "item1",
                 "item2",
                 "item3"
                ]
               },
               {
                "type": "dropdown",
                "name": "question11",
                "title": "Elect/Caloric/H2o",
                "choicesFromQuestion": "question5",
                "choices": [
                 "item1",
                 "item2",
                 "item3"
                ]
               },
               {
                "type": "text",
                "name": "question12",
                "title": "Red Cell Distribution Width"
               },
               {
                "type": "text",
                "name": "question19",
                "title": "Red blood cell distribution width (RDW) median value"
               }
              ]
             },
             {
              "name": "page2",
              "elements": [
               {
                "type": "text",
                "name": "question20",
                "title": "Red blood cell distribution width (RDW) minimum value"
               },
               {
                "type": "text",
                "name": "question13",
                "title": "Triage vital sign for respiratory rate"
               },
               {
                "type": "text",
                "name": "question26",
                "title": "Triage vital sign for temperature"
               },
               {
                "type": "dropdown",
                "name": "question17",
                "title": "Diuretics (Water Pills)",
                "choicesFromQuestion": "question8",
                "choices": [
                 "item1",
                 "item2",
                 "item3"
                ]
               },
               {
                "type": "text",
                "name": "question28",
                "title": "Smart Vital Signs Monitoring System for Patient Triage"
               },
               {
                "type": "text",
                "name": "question29",
                "title": "Minimum Oxygen saturation"
               },
               {
                "type": "text",
                "name": "question30",
                "title": "Respiration maximum (Rapid breathing)"
               },
               {
                "type": "text",
                "name": "question31",
                "title": "Vital Signs Monitoring System maximum"
               },
               {
                "type": "text",
                "name": "question32",
                "title": "Abdominal Pain"
               },
               {
                "type": "text",
                "name": "question33",
                "title": "Shortness of Breath"
               },
               {
                "type": "text",
                "name": "question34",
                "title": " Suicidal"
               }
              ]
             }
            ]
           }
        var surveyRender=!this.state.iscompleted ?
        (
            <Survey.Survey
            json={json}
            showCompletedPage={false}
            onComplete={this.oncompletecomponent}
            />
        ):null
        var onsurveyCompletion = this.state.iscompleted ?
        (<div>Thanks For Completing SUrvey</div>):null

        return(
            <Container fluid className="py-4">
            <Row>
              <Sidebar />
              <Col md={9}>
              

            <div className='Admission'>
            <div>
                {surveyRender}
                {onsurveyCompletion}
            </div>
            </div>
            </Col>
      </Row>
  </Container>
        );
    }

} 
export default Admission;