import { useState } from 'react';
import { Row, Col, Card, Dropdown } from 'react-bootstrap';

const randomData = {
    Site1: {
        investmentDetails: {
            plantSize: '322 kWp',
            plantValue: '₹80,50,000.00',
            plantOwned: '30 kWp',
            commissioningDate: '04 April 2024',
            pricePerKwh: '₹4.50',
        },
        plantDetails: {
            totalPlantSize: '400 kWp',
            totalPlantValue: '₹1,00,00,000.00',
            plantOwned: '40 kWp',
            dateOfCommissioning: '10 April 2024',
            pricePerKwh: '₹4.60',
        }
    },
    Site2: {
        investmentDetails: {
            plantSize: '500 kWp',
            plantValue: '₹1,20,00,000.00',
            plantOwned: '50 kWp',
            commissioningDate: '12 May 2023',
            pricePerKwh: '₹4.20',
        },
        plantDetails: {
            totalPlantSize: '600 kWp',
            totalPlantValue: '₹1,50,00,000.00',
            plantOwned: '60 kWp',
            dateOfCommissioning: '15 May 2023',
            pricePerKwh: '₹4.30',
        }
    },
    Site3: {
        investmentDetails: {
            plantSize: '750 kWp',
            plantValue: '₹2,00,00,000.00',
            plantOwned: '75 kWp',
            commissioningDate: '21 June 2022',
            pricePerKwh: '₹4.00',
        },
        plantDetails: {
            totalPlantSize: '900 kWp',
            totalPlantValue: '₹2,50,00,000.00',
            plantOwned: '90 kWp',
            dateOfCommissioning: '25 June 2022',
            pricePerKwh: '₹4.10',
        }
    }
};

const Verification = () => {
    const [selectedOption, setSelectedOption] = useState('Site1');
    const [dropdownLabel, setDropdownLabel] = useState('Choose Site');

    const handleSelect = (key) => {
        setSelectedOption(key);
        setDropdownLabel(`${key}`);
    };

    const data = randomData[selectedOption];

    return (
        <>
            <div className="mb-sm-2 mb-3 d-flex flex-wrap align-items-center text-head">
                <h2 className="me-auto">Investment & Plant Details</h2>
            </div>

            <div className="basic-dropdown mb-4">
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle variant="primary">
                        {dropdownLabel}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Site1">Site 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Site2">Site 2</Dropdown.Item>
                        <Dropdown.Item eventKey="Site3">Site 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Investment Details</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="mb-0 title">Total Plant Size</span> :
                                    <span className="text-black ms-2">{data.investmentDetails.plantSize}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="mb-0 title">Total Plant Value</span> :
                                    <span className="text-black ms-2">{data.investmentDetails.plantValue}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="mb-0 title">Plant Owned</span> :
                                    <span className="text-black ms-2">{data.investmentDetails.plantOwned}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="mb-0 title">Date of Commissioning</span> :
                                    <span className="text-black ms-2">{data.investmentDetails.commissioningDate}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="mb-0 title">Price per kWh</span> :
                                    <span className="text-black ms-2">{data.investmentDetails.pricePerKwh}</span>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Plant Details</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="mb-0 title">Total Plant Size</span> :
                                    <span className="text-black ms-2">{data.plantDetails.totalPlantSize}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="mb-0 title">Total Plant Value</span> :
                                    <span className="text-black ms-2">{data.plantDetails.totalPlantValue}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="mb-0 title">Plant Owned</span> :
                                    <span className="text-black ms-2">{data.plantDetails.plantOwned}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="mb-0 title">Date of Commissioning</span> :
                                    <span className="text-black ms-2">{data.plantDetails.dateOfCommissioning}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="mb-0 title">Price per kWh</span> :
                                    <span className="text-black ms-2">{data.plantDetails.pricePerKwh}</span>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Verification;