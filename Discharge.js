import React , {Component}from 'react';
import './App.css';
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import Sidebar from './Components/Sidebar';
import "survey-react/survey.css";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { render } from '@testing-library/react';

import { Container, Row, Col } from "react-bootstrap";
class Discharge extends Component {
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
            "title": "Discharge Forum",
            "logoPosition": "right",
            "pages": [
             {
              "name": "Age",
              "elements": [
               {
                "type": "text",
                "name": "question1",
                "title": "Patient ID"
               },
               {
                "type": "text",
                "name": "question 2",
                "title": "Name"
               },
               {
                "type": "text",
                "name": "question11",
                "title": "Phone Number"
               },
               {
                "type": "text",
                "name": "question3",
                "title": "Attending Physician"
               },
               {
                "type": "text",
                "name": "question2",
                "title": "Facility Name"
               },
               {
                "type": "text",
                "name": "question5",
                "title": "Date Services should end"
               },
               {
                "type": "checkbox",
                "name": "question6",
                "title": "Elements that need to be put in place prior to discharge (verify that the following information is documented in the record, if applicable)",
                "choices": [
                 {
                  "value": "item1",
                  "text": "Physician note reflecting readiness for discharge"
                 },
                 {
                  "value": "item2",
                  "text": "Therapy notes (if applicable)"
                 },
                 {
                  "value": "item3",
                  "text": "Discharge plan discussed with member/family"
                 },
                 {
                  "value": "item4",
                  "text": "Discharge plan discussed with attending provider"
                 },
                 {
                  "value": "item5",
                  "text": "Description of discharge plan in place"
                 }
                ],
                "hasOther": true
               }
              ]
             },
             {
              "name": "Medical Information",
              "elements": [
               {
                "type": "text",
                "name": "question4",
                "title": "a. You were admitted to (see facility above) on the following date "
               },
               {
                "type": "text",
                "name": "question7",
                "title": " b. At Discharge you presented with the following symptoms"
               },
               {
                "type": "text",
                "name": "question8",
                "title": "c. You were diagnosed with"
               },
               {
                "type": "text",
                "name": "question9",
                "title": "d. You were treated with "
               },
               {
                "type": "text",
                "name": "question10",
                "title": "e. Your tests were (include results)"
               },
               {
                "type": "text",
                "name": "question12",
                "title": "f. You were evaluated by"
               },
               {
                "type": "text",
                "name": "question13",
                "title": "g. You are now (list current treatment plan and/or state the medical issue is resolved)"
               },
               {
                "type": "text",
                "name": "question14",
                "title": "h. Your provider feels that your condition has improved and that the care you need now could safelybe provided in/at"
               },
               {
                "type": "text",
                "name": "question15",
                "title": "i. Your discharge plan and follow-up care includes"
               }
              ],
              "title": "Medical Information",
              "description": "Fill in detailed and specific information about the patient’s current medical condition and the reasons why services are no longer reasonable or necessary for this patient or are no longer covered according to Medicare or Medicare managed care coverage guidelines. (Use full sentences, plain language and no abbreviations)"
             },
             {
              "name": "page1",
              "elements": [
               {
                "type": "text",
                "name": "question16",
                "title": "Printed name of person completing the form"
               },
               {
                "type": "text",
                "name": "question17",
                "title": "Phone Number"
               },
               {
                "type": "signaturepad",
                "name": "question18",
                "title": "Signature of person completing the form"
               }
              ],
              "title": "Other Information"
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
              

            <div className= 'Discharge'>
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
export default Discharge;