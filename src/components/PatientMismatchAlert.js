import React, {useState} from "react";
import Alert from "react-bootstrap/Alert";
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

const PatientMismatchAlert = (props) => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert show={show}
                   className={'text-center'}
                   onClose={() => setShow(false)}
                   variant={props.severity}
                   closeLabel=''
                   dismissible
                   fade="false">
                <span className={"mr-3"}>Warning: Patient Details Mis-match.</span>
                <Button variant={props.severity} >
                    Details
                </Button>
            </Alert>
        )
    }
    return <Button variant={props.severity} onClick={() => setShow(true)}><FontAwesomeIcon icon={faExclamationTriangle}/></Button>;
}


export default PatientMismatchAlert;
