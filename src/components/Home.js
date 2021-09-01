import React from "react";
import ActiveEncountersList from "./ActiveEncountersList";
import PatientMismatchAlert from "./PatientMismatchAlert";
import {comparePatientName} from "../utilities/PatientUtilities";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sofPatient: JSON.parse(localStorage.getItem('SOFBundle')).patient,
            pwPatient: JSON.parse(localStorage.getItem('PWBundle')).patient[0],
        }
    }

    render() {
        let alert;
        let severity;
        if(comparePatientName(this.state.sofPatient, this.state.pwPatient)) {
            severity = 'success';
        } else {
            severity = 'warning';
        }
        alert = <PatientMismatchAlert severity={severity}/>;

        return (
            <div>
                {alert}
                <h1>Patient Encounter List Page</h1>
                <ActiveEncountersList/>
                {/*<AvailableEncountersList/>*/}
            </div>
        );
    }
}

