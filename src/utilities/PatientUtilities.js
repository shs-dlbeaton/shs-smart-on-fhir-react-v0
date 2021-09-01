import React from 'react';

export function comparePatientName(sofPatient, pwPatient){
    let nameMatch = false;

    if(sofPatient && pwPatient){
        console.log('SOF Patient');
        console.log(sofPatient);
        let sofNameObject = {
            firstName: sofPatient.name[0].given[0],
            lastName: sofPatient.name[0].family
        };
        console.log(sofNameObject);
        console.log('PW Patient');
        console.log(pwPatient);
        let pwNameObject = {
            firstName: pwPatient.firstName,
            lastName: pwPatient.lastName
        };
        console.log(pwNameObject);

        if(JSON.stringify(sofNameObject) === JSON.stringify(pwNameObject)){
            console.log('match');
            nameMatch = true;
        }
    }

    return nameMatch;
}
