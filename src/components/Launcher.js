import React from "react";
import {Redirect} from "react-router-dom";

export default class Launcher extends React.Component {
    sofBundle = {};

    async fetchFromPathways() {
        const url = 'https://services-strataconnect.stratahealth.net:3141/smartLookup';
        const user = 'smartonfhir@stratahealth.com';
        const pass = 'R0bot587tw3ak';

        let pwFetch = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.sofBundle),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(user+':'+pass)
            }
        });
        console.log(pwFetch);

        if (!pwFetch.ok) {
            let errorMessage = `An error has occured: ${pwFetch.status}`;
            console.log(errorMessage);
        }

        return await pwFetch.json();
    };

    componentDidMount() {
        /**
         *AUTHORIZE SMART CLIENT
         */
        //SET DUMMY 'FHIR' PATIENT
        this.setPatient();
        console.log("SoF Bundle set");

        // FETCH PATIENT BUNDLE FROM PW
        this.fetchFromPathways().then(data => {
            console.log('setting PWBundle');
            localStorage.setItem('PWBundle', JSON.stringify(data));
        });
        console.log("Pathways Bundle Set");

        //JUST REDIRECT TO HOME FOR NOW
    }

    setPatient = () => {
        this.sofBundle = {
            "patient": {
                "resourceType": "Patient",
                "id": "87a339d0-8cae-418e-89c7-8651e6aab3c6",
                "meta": {
                    "versionId": "173",
                    "lastUpdated": "2021-04-14T03:08:15.286-04:00",
                    "tag": [
                        {
                            "system": "https://smarthealthit.org/tags",
                            "code": "synthea-5-2019"
                        }
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Generated by <a href=\"https://github.com/synthetichealth/synthea\">Synthea</a>.Version identifier: v2.4.0-100-g26a4b936\n .   Person seed: 911708758626700213  Population seed: 1559319163074</div>"
                },
                "extension": [
                    {
                        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
                        "extension": [
                            {
                                "url": "ombCategory",
                                "valueCoding": {
                                    "system": "urn:oid:2.16.840.1.113883.6.238",
                                    "code": "2106-3",
                                    "display": "White"
                                }
                            },
                            {
                                "url": "text",
                                "valueString": "White"
                            }
                        ]
                    },
                    {
                        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
                        "extension": [
                            {
                                "url": "ombCategory",
                                "valueCoding": {
                                    "system": "urn:oid:2.16.840.1.113883.6.238",
                                    "code": "2186-5",
                                    "display": "Not Hispanic or Latino"
                                }
                            },
                            {
                                "url": "text",
                                "valueString": "Not Hispanic or Latino"
                            }
                        ]
                    },
                    {
                        "url": "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
                        "valueString": "Vonnie Kunde"
                    },
                    {
                        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                        "valueCode": "F"
                    },
                    {
                        "url": "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
                        "valueAddress": {
                            "city": "Milton",
                            "state": "Massachusetts",
                            "country": "US"
                        }
                    },
                    {
                        "url": "http://synthetichealth.github.io/synthea/disability-adjusted-life-years",
                        "valueDecimal": 26.256072397468694
                    },
                    {
                        "url": "http://synthetichealth.github.io/synthea/quality-adjusted-life-years",
                        "valueDecimal": 29.743927602531309
                    }
                ],
                "identifier": [
                    {
                        "system": "https://github.com/synthetichealth/synthea",
                        "value": "293ee354-f8ad-4345-b10c-759fdfdcc082"
                    },
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "code": "MR",
                                    "display": "Medical Record Number"
                                }
                            ],
                            "text": "Medical Record Number"
                        },
                        "system": "http://hospital.smarthealthit.org",
                        "value": "293ee354-f8ad-4345-b10c-759fdfdcc082"
                    },
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "code": "SS",
                                    "display": "Social Security Number"
                                }
                            ],
                            "text": "Social Security Number"
                        },
                        "system": "http://hl7.org/fhir/sid/us-ssn",
                        "value": "999-97-9098"
                    },
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "code": "DL",
                                    "display": "Driver's License"
                                }
                            ],
                            "text": "Driver's License"
                        },
                        "system": "urn:oid:2.16.840.1.113883.4.3.25",
                        "value": "S99981121"
                    },
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "code": "PPN",
                                    "display": "Passport Number"
                                }
                            ],
                            "text": "Passport Number"
                        },
                        "system": "http://standardhealthrecord.org/fhir/StructureDefinition/passportNumber",
                        "value": "X1974835X"
                    }
                ],
                "name": [
                    {
                        "use": "official",
                        "family": "Kshlerinee",
                        "given": [
                            "Danae"
                        ],
                        "prefix": [
                            "Mrs."
                        ]
                    },
                    {
                        "use": "maiden",
                        "family": "Graham",
                        "given": [
                            "Danae"
                        ],
                        "prefix": [
                            "Mrs."
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "555-182-4285",
                        "use": "home"
                    }
                ],
                "gender": "female",
                "birthDate": "1964-05-13",
                "address": [
                    {
                        "extension": [
                            {
                                "url": "http://hl7.org/fhir/StructureDefinition/geolocation",
                                "extension": [
                                    {
                                        "url": "latitude",
                                        "valueDecimal": 42.50128
                                    },
                                    {
                                        "url": "longitude",
                                        "valueDecimal": -70.897502
                                    }
                                ]
                            }
                        ],
                        "line": [
                            "662 Ullrich Path Suite 61"
                        ],
                        "city": "Salem",
                        "state": "Massachusetts",
                        "postalCode": "01907",
                        "country": "US"
                    }
                ],
                "maritalStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                            "code": "M",
                            "display": "M"
                        }
                    ],
                    "text": "M"
                },
                "multipleBirthBoolean": false,
                "communication": [
                    {
                        "language": {
                            "coding": [
                                {
                                    "system": "urn:ietf:bcp:47",
                                    "code": "en-US",
                                    "display": "English"
                                }
                            ],
                            "text": "English"
                        }
                    }
                ]
            },
            "organization": {
                "resourceType": "Organization",
                "id": "4861d01f-019c-3dac-a153-8334e50919f9",
                "meta": {
                    "versionId": "5",
                    "lastUpdated": "2021-04-07T02:56:51.124-04:00",
                    "tag": [
                        {
                            "system": "https://smarthealthit.org/tags",
                            "code": "synthea-5-2019"
                        }
                    ]
                },
                "extension": [
                    {
                        "url": "http://synthetichealth.github.io/synthea/utilization-encounters-extension",
                        "valueInteger": 5368
                    },
                    {
                        "url": "http://synthetichealth.github.io/synthea/utilization-procedures-extension",
                        "valueInteger": 2708
                    },
                    {
                        "url": "http://synthetichealth.github.io/synthea/utilization-labs-extension",
                        "valueInteger": 471
                    },
                    {
                        "url": "http://synthetichealth.github.io/synthea/utilization-prescriptions-extension",
                        "valueInteger": 442
                    }
                ],
                "identifier": [
                    {
                        "system": "https://github.com/synthetichealth/synthea",
                        "value": "4861d01f-019c-3dac-a153-8334e50919f9"
                    }
                ],
                "active": true,
                "type": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/organization-type",
                                "code": "prov",
                                "display": "Healthcare Provider"
                            }
                        ],
                        "text": "Healthcare Provider"
                    }
                ],
                "name": "Model Hospital",
                "telecom": [
                    {
                        "system": "phone",
                        "value": "9787411215"
                    }
                ],
                "address": [
                    {
                        "line": [
                            "81 HIGHLAND AVENUE"
                        ],
                        "city": "SALEM",
                        "state": "MA",
                        "postalCode": "01970",
                        "country": "US"
                    }
                ]
            }
        };
        localStorage.setItem("SOFBundle", JSON.stringify(this.sofBundle));
    };

    render() {
        return <Redirect to="/app"/>;
    }
}