// import { useState } from 'react';
// import { Row, Col, Card, Dropdown, Button, Badge, Form } from 'react-bootstrap';

// const Security = () => {
//     const [selectedOption, setSelectedOption] = useState('Site1');
//     const [dropdownLabel, setDropdownLabel] = useState('Choose Site');

//     return (
//         <>
//             <Row className="mt-5">
//                 <Col xl="7">
//                     <Card className="p-4 text-white">
//                         <Card.Header className="border-0">
//                             <h4 className="mb-0">Two-factor authentication</h4>
//                         </Card.Header>
//                         <Card.Body>
//                             <p>
//                                 Two-factor Authentication adds an extra layer of security to your
//                                 account by asking for a verification code when you sign in.
//                             </p>
//                             <Row>
//                                 {/* Google Authenticator Option */}
//                                 <Col md="6" className="mb-4">
//                                     <Card className="bg-secondary text-white h-100 p-3">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <h5>Google Authenticator</h5>
//                                             <Badge bg="success">Recommended</Badge>
//                                         </div>
//                                         <p className="mt-2">
//                                             Use an app to generate time-sensitive authentication codes
//                                             on your phone.
//                                         </p>
//                                         {/* <Form.Check
//                                             type="switch"
//                                             id="google-authenticator-switch"
//                                             className="mt-3 large-switch"
//                                             label=""
//                                         /> */}
//                                         <div class="form-check form-switch">
//                                             <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//                                             {/* <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
//                                         </div>
//                                     </Card>
//                                 </Col>

//                                 {/* Text Message Option */}
//                                 <Col md="6" className="mb-4">
//                                     <Card className="bg-secondary text-white h-100 p-3">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <h5>Text Message (SMS)</h5>
//                                         </div>
//                                         <p className="mt-2">
//                                             Receive time-sensitive authentication codes messaged to your
//                                             phone.
//                                         </p>
//                                         <Form.Check
//                                             type="switch"
//                                             id="text-message-switch"
//                                             className="mt-3"
//                                             label=""
//                                         />
//                                     </Card>
//                                 </Col>
//                             </Row>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col xl="5">
//                     <Card className="text-center h-auto">
//                         <Card.Header>
//                             <Card.Title>Anti Phishing</Card.Title>
//                         </Card.Header>
//                         <Card.Body>
//                             <Card.Text>
//                                 This is an identification code that users set to prevent damage caused by phishing emails by manually setting an anti-phishing code to distinguish official emails from phishing emails.
//                             </Card.Text>
//                             <Button as="a" variant="outline-success" href="#" className="mt-3">
//                                 Create Code
//                             </Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//         </>
//     );
// };

// export default Security;




// import React, {useState, useRef, useEffect} from 'react';
// import { Row, Col, Card, Button, Badge, Form, Table } from 'react-bootstrap';

// const deviceData = [
//     {
//         os: "Vidit's iPhone",
//         browser: "-",
//         lastLogin: "09.12.21",
//         timeZone: "Asia/Kolkata",
//     },
//     {
//         os: "MacIntel",
//         browser:
//             "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36",
//         lastLogin: "16.12.21",
//         timeZone: "Asia/Calcutta",
//     },
// ];



// const Security = () => {
//     const [data, setData] = useState(
// 		document.querySelectorAll("#blog_wrapper tbody tr")
// 	);
// 	const sort = 8;
// 	const activePag = useRef(0);
// 	const [test, settest] = useState(0);


// 	const chageData = (frist, sec) => {
// 		for (var i = 0; i < data.length; ++i) {
// 			if (i >= frist && i < sec) {
// 				data[i].classList.remove("d-none");
// 			} else {
// 				data[i].classList.add("d-none");
// 			}
// 		}
// 	};

//    useEffect(() => {
//       setData(document.querySelectorAll("#blog_wrapper tbody tr"));

// 	}, [test]);



//    activePag.current === 0 && chageData(0, sort);

//     return (
//         <>
//             <Row className="mt-5">
//                 <Col xl="7">
//                     <Card className="p-4">
//                         <Card.Header className="border-0 p-0">
//                             <h4 className="mb-3 text-center">Two-factor authentication</h4>
//                         </Card.Header>
//                         <Card.Body className="p-0">
//                             <p className="text-left mb-4">
//                                 Two-factor Authentication adds an extra layer of security to your
//                                 account by asking for a verification code when you sign in.
//                             </p>
//                             <Row>
//                                 {/* Google Authenticator Option */}
//                                 <Col md="6" className="mb-4">
//                                     <Card className="bg-secondary text-white h-100 p-3">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <h5 className="text-white">Google Authenticator</h5>
//                                             <Badge bg="success">Recommended</Badge>
//                                         </div>
//                                         <p className="mt-2">
//                                             Use an app to generate time-sensitive authentication codes
//                                             on your phone.
//                                         </p>
//                                         <div className="form-check form-switch">
//                                             <input
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 role="switch"
//                                                 id="google-authenticator-switch"
//                                             />
//                                         </div>
//                                     </Card>
//                                 </Col>

//                                 {/* Text Message Option */}
//                                 <Col md="6" className="mb-4">
//                                     <Card className="bg-secondary text-white h-100 p-3">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <h5 className="text-white">Text Message (SMS)</h5>
//                                         </div>
//                                         <p className="mt-2">
//                                             Receive time-sensitive authentication codes messaged to your
//                                             phone.
//                                         </p>
//                                         <Form.Check
//                                             type="switch"
//                                             id="text-message-switch"
//                                             className="mt-3"
//                                             label=""
//                                         />
//                                     </Card>
//                                 </Col>
//                             </Row>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col xl="5">
//                     <Card className="text-center h-auto">
//                         <Card.Header>
//                             <Card.Title>Anti Phishing</Card.Title>
//                         </Card.Header>
//                         <Card.Body>
//                             <Card.Text>
//                                 This is an identification code that users set to prevent damage caused by phishing emails by manually setting an anti-phishing code to distinguish official emails from phishing emails.
//                             </Card.Text>
//                             <Button as="a" variant="outline-success" href="#" className="mt-3">
//                                 Create Code
//                             </Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             {/* Whitelist Bar */}
//             <Row className="mt-4">
//                 <Col>
//                     <Card className="text-white p-3 d-flex flex-row align-items-center justify-content-between">
//                         <div className="d-flex align-items-center">
//                             <i className="bi bi-shield-fill-check text-success me-2"></i>
//                             <h6 className="mb-0">Whitelist</h6>
//                         </div>
//                         <Form.Check
//                             type="switch"
//                             id="whitelist-switch"
//                             className="form-check-input-lg"
//                             label=""
//                         />
//                     </Card>
//                 </Col>
//             </Row>
//             <Row className="mt-5">
//                 <Col xl="12">
//                     <Card className="p-4 text-white">
//                         <Card.Header className="border-0">
//                             <h4 className="mb-3">Device Management</h4>
//                         </Card.Header>
//                         <Card.Body className="p-0">
//                             <Table striped bordered hover variant="" className="mb-0">
//                                 <thead>
//                                     <tr>
//                                         <th>OS</th>
//                                         <th>Browser</th>
//                                         <th>Last Login</th>
//                                         <th>TimeZone</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {deviceData.map((device, index) => (
//                                         <tr key={index}>
//                                             <td>{device.os}</td>
//                                             <td>{device.browser}</td>
//                                             <td>{device.lastLogin}</td>
//                                             <td>{device.timeZone}</td>
//                                             <td className="text-center">
//                                                 <Button
//                                                     variant="danger"
//                                                     size="sm"
//                                                     className="p-0"
//                                                     style={{
//                                                         width: "24px",
//                                                         height: "24px",
//                                                         borderRadius: "50%",
//                                                         lineHeight: "0",
//                                                     }}
//                                                 >
//                                                     &times;
//                                                 </Button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </Table>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </>
//     );
// };

// export default Security;




import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Card, Button, Badge, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const deviceData = [
    {
        os: "Vidit's iPhone",
        browser: "-",
        lastLogin: "09.12.21",
        timeZone: "Asia/Kolkata",
    },
    {
        os: "MacIntel",
        browser:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36",
        lastLogin: "16.12.21",
        timeZone: "Asia/Calcutta",
    },
];

const Security = () => {
    const [data, setData] = useState(
        document.querySelectorAll("#blog_wrapper tbody tr")
    );
    const sort = 8;
    const activePag = useRef(0);
    const [test, setTest] = useState(0);

    const chageData = (frist, sec) => {
        for (var i = 0; i < data.length; ++i) {
            if (i >= frist && i < sec) {
                data[i].classList.remove("d-none");
            } else {
                data[i].classList.add("d-none");
            }
        }
    };

    useEffect(() => {
        setData(document.querySelectorAll("#blog_wrapper tbody tr"));
    }, [test]);

    activePag.current === 0 && chageData(0, sort);

    return (
        <>
            <div className="d-flex">
                {/* Fixed Sidebar */}
                {/* <div className="fixed-sidebar bg-gray-200 p-4 shadow-md h-screen w-64">
                    <h4 className="text-lg font-bold mb-6">Profile</h4>
                    <nav className="flex flex-col">
                        <Link
                            to="/security"
                            className="btn btn-primary text-start w-full mb-4 rounded-lg"
                        >
                            Security
                        </Link>
                        <Link
                            to="/verification"
                            className="btn btn-primary text-start w-full mb-4 rounded-lg"
                        >
                            Verification
                        </Link>
                        <Link
                            to="/settings"
                            className="btn btn-primary text-start w-full rounded-lg"
                        >
                            Settings
                        </Link>
                    </nav>
                </div> */}

                {/* Main Content */}
                <div className="flex-1 ml-80">
                    <Row className="mt-5">
                        <Col xl="7">
                            <Card className="p-4">
                                <Card.Header className="border-0 p-0">
                                    <h4 className="mb-3 text-center">Two-factor authentication</h4>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <p className="text-left mb-4">
                                        Two-factor Authentication adds an extra layer of security to
                                        your account by asking for a verification code when you sign in.
                                    </p>
                                    <Row>
                                        {/* Google Authenticator Option */}
                                        <Col md="6" className="mb-4">
                                            <Card className="bg-secondary text-white h-100 p-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="text-white">Google Authenticator</h5>
                                                    {/* <Badge bg="success" style={{ fontSize: "0.57rem" }}>Recommended</Badge> */}
                                                    <Badge
                                                        bg="success"
                                                        style={{
                                                            fontSize: "0.57rem", // Adjusted font size
                                                            padding: "0.2rem 0.5rem", // Added padding for vertical and horizontal centering
                                                            display: "inline-block", // Ensures proper alignment
                                                            textAlign: "center", // Centers text horizontally
                                                            lineHeight: "1", // Ensures proper text line height
                                                        }}
                                                    >
                                                        Recommended
                                                    </Badge>

                                                </div>
                                                <p className="mt-2">
                                                    Use an app to generate time-sensitive authentication codes
                                                    on your phone.
                                                </p>
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        role="switch"
                                                        id="google-authenticator-switch"
                                                    />
                                                </div>
                                            </Card>
                                        </Col>

                                        {/* Text Message Option */}
                                        <Col md="6" className="mb-4">
                                            <Card className="bg-secondary text-white h-100 p-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="text-white">Text Message (SMS)</h5>
                                                </div>
                                                <p className="mt-2">
                                                    Receive time-sensitive authentication codes messaged to
                                                    your phone.
                                                </p>
                                                <Form.Check
                                                    type="switch"
                                                    id="text-message-switch"
                                                    className="mt-3"
                                                    label=""
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl="5">
                            <Card className="text-center h-auto">
                                <Card.Header>
                                    <Card.Title>Anti Phishing</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        This is an identification code that users set to prevent damage
                                        caused by phishing emails by manually setting an anti-phishing
                                        code to distinguish official emails from phishing emails.
                                    </Card.Text>
                                    <Button
                                        as="a"
                                        variant="outline-success"
                                        href="#"
                                        className="mt-3"
                                    >
                                        Create Code
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Whitelist Bar */}
                    <Row className="mt-4">
                        <Col>
                            <Card className="text-white p-3 d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-shield-fill-check text-success me-2"></i>
                                    <h6 className="mb-0">Whitelist</h6>
                                </div>
                                <Form.Check
                                    type="switch"
                                    id="whitelist-switch"
                                    className="form-check-input-lg"
                                    label=""
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xl="12">
                            <Card className="p-4 text-white">
                                <Card.Header className="border-0">
                                    <h4 className="mb-3">Device Management</h4>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <Table striped bordered hover variant="" className="mb-0">
                                        <thead>
                                            <tr>
                                                <th>OS</th>
                                                <th>Browser</th>
                                                <th>Last Login</th>
                                                <th>TimeZone</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {deviceData.map((device, index) => (
                                                <tr key={index}>
                                                    <td>{device.os}</td>
                                                    <td>{device.browser}</td>
                                                    <td>{device.lastLogin}</td>
                                                    <td>{device.timeZone}</td>
                                                    <td className="text-center">
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            className="p-0"
                                                            style={{
                                                                width: "24px",
                                                                height: "24px",
                                                                borderRadius: "50%",
                                                                lineHeight: "0",
                                                            }}
                                                        >
                                                            &times;
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Security;
