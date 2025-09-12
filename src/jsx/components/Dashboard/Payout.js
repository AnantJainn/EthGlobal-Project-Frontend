// import React from "react";
// import { Card, Form, Button, Row, Col } from "react-bootstrap";

// const Payout = () => {
//     return (
//         <div className="p-4">
//             {/* Top Box to Display a Value */}
//             <Card className="mb-4 shadow-sm">
//                 <Card.Body>
//                     <h5 className="mb-0">Available Balance: <strong>$1,000.00</strong></h5>
//                 </Card.Body>
//             </Card>

//             {/* Payout Form */}
//             <Card className="mb-4 shadow-sm">
//                 <Card.Header>
//                     <Card.Title className="mb-0">Create Fund Account</Card.Title>
//                 </Card.Header>
//                 <Card.Body>
//                     <Form>
//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="contactId">
//                                 <Form.Label>Contact ID</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Enter Contact ID"
//                                 />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="accountType">
//                                 <Form.Label>Account Type</Form.Label>
//                                 <Form.Select>
//                                     <option value="bank_account">bank_account</option>
//                                     {/* Add other options if needed */}
//                                 </Form.Select>
//                             </Form.Group>
//                         </Row>

//                         <Form.Group className="mb-3" controlId="accountHolderName">
//                             <Form.Label>Account Holder Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter Account Holder Name"
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="ifscCode">
//                             <Form.Label>IFSC Code</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter IFSC Code"
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="accountNumber">
//                             <Form.Label>Account Number</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter Account Number"
//                             />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             Create Fund Account
//                         </Button>
//                     </Form>
//                 </Card.Body>
//             </Card>

//             {/* Withdraw Button */}
//             <div className="text-end">
//                 <Button variant="success">Withdraw</Button>
//             </div>
//         </div>
//     );
// };

// export default Payout;

import React, { useState, useEffect } from "react";
import { Card, Form, Button, Row, Col, Collapse } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Payout = () => {
  const [accountType, setAccountType] = useState("bank_account");
  const [contactId, setContactId] = useState("");
  const [fundAccountId, setFundAccountId] = useState(""); // Store fund account ID
  const [payoutId, setPayoutId] = useState("");
  const [availableBalance, setAvailableBalance] = useState(0);
  const [form, setForm] = useState({
    name: "",
    ifsc: "",
    account_number: "",
    vpa: "",
  });

  const [fundLoading, setFundLoading] = useState(false);
  const [withdrawLoading, setWithdrawLoading] = useState(false);
  const [open2, setOpen2] = useState(true);
  const [userPurchases, setUserPurchases] = useState([]);

  useEffect(() => {
    const fetchUserBalance = async () => {
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));
      const userId = userDetails?.userId;
      if (!userId) return;

      try {
        const res = await fetch(
          `https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}`
        );
        const data = await res.json();
        console.log("Data: ", data);
        if (res.ok) {
          console.log("✅ Backend responded OK");
          if (data.totalReturn > 0) {
            setAvailableBalance(data.totalReturn);
          }
          // Fetch fundAccountId and payoutId from the response and set them
          setFundAccountId(data.fundAccountId || "Not created yet");
          console.log("Payout Id: ", data.payoutId)
          setPayoutId(data.payoutId || "Not created yet");

          // Prepopulate the form fields with the user's stored account details
          setForm({
            name: data.accountHolderName || "",
            ifsc: data.ifsc || "",
            account_number: data.accountNumber || "",
            vpa: data.vpaId || "",
          });
        } else {
          console.log("❌ Backend responded with non-OK status");
        }
      } catch (err) {
        console.error("❌ Failed to fetch total return:", err);
      }
    };

    fetchUserBalance();
  }, []);

  // Create contact and set contact ID
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (!userDetails) return;
    const { name, email } = userDetails;

    const createContact = async () => {
      try {
        const res = await fetch(
          "https://enfros-solutions-backend-1.onrender.com/api/v1/payout/create-contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, type: "customer" }),
          }
        );
        const data = await res.json();
        if (res.ok) {
          setContactId(data.id);
          localStorage.setItem("razorpay_contact_id", data.id);
        } else {
          console.error("Contact creation failed:", data.error?.description);
        }
      } catch (err) {
        console.error("Error creating contact:", err.message);
      }
    };

    const existingId = localStorage.getItem("razorpay_contact_id");
    if (existingId) {
      setContactId(existingId);
    } else {
      createContact();
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Create Fund Account API
  // const handleCreateFundAccount = async (e) => {
  //   e.preventDefault();
  //   setFundLoading(true);
  //   const payload = {
  //     contact_id: contactId,
  //     account_type: accountType,
  //     ...(accountType === "bank_account"
  //       ? {
  //           bank_account: {
  //             name: form.name,
  //             ifsc: form.ifsc,
  //             account_number: form.account_number,
  //           },
  //         }
  //       : {
  //           vpa: {
  //             address: form.vpa,
  //           },
  //         }),
  //   };

  //   try {
  //     const res = await fetch(
  //       "https://enfros-solutions-backend-1.onrender.com/api/v1/payout/create-fund-account",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(payload),
  //       }
  //     );

  //     const data = await res.json();

  //     if (res.ok) {
  //       setFundAccountId(data.id);
  //       alert(
  //         `Fund Account Created: ${data.id}. Now you can withdraw your rewards`
  //       );
  //       localStorage.setItem("razorpay_fund_account_id", data.id);
  //       localStorage.setItem("razorpay_fund_account_type", accountType);
  //       const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  //       const userId = userDetails?.userId;

  //       if (userId) {
  //         await fetch(
  //           `https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}/save-fund-account`,
  //           {
  //             method: "PUT",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({
  //               fundAccountId: data.id,
  //               fundAccountType: accountType,
  //               accountHolderName: form.name || null,
  //               ifsc: form.ifsc || null,
  //               accountNumber: form.account_number || null,
  //               vpaId: form.vpa || null,
  //             }),
  //           }
  //         );
  //         console.log("✅ Fund Account details saved in database");
  //       }
  //     } else {
  //       throw new Error(data.error?.description);
  //     }
  //   } catch (err) {
  //     alert(err.message || "Failed to create fund account");
  //   } finally {
  //     setFundLoading(false);
  //   }
  // };

  // Create Fund Account API
  const handleCreateFundAccount = async (e) => {
    e.preventDefault();
    setFundLoading(true);
    const payload = {
      contact_id: contactId,
      account_type: accountType,
      ...(accountType === "bank_account"
        ? {
            bank_account: {
              name: form.name,
              ifsc: form.ifsc,
              account_number: form.account_number,
            },
          }
        : {
            vpa: {
              address: form.vpa,
            },
          }),
    };

    try {
      const res = await fetch(
        "https://enfros-solutions-backend-1.onrender.com/api/v1/payout/create-fund-account",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setFundAccountId(data.id);
        alert(
          `Fund Account Created: ${data.id}. Now your rewards are set up for automatic payout.`
        );

        // Store Razorpay fund account ID and type in localStorage
        localStorage.setItem("razorpay_fund_account_id", data.id);
        localStorage.setItem("razorpay_fund_account_type", accountType);

        // Save Fund Account details in database via backend
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        const userId = userDetails?.userId;

        if (userId) {
          await fetch(
            `https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}/save-fund-account`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fundAccountId: data.id,
                fundAccountType: accountType,
                payoutId: payoutId,
                accountHolderName: form.name || null,
                ifsc: form.ifsc || null,
                accountNumber: form.account_number || null,
                vpaId: form.vpa || null,
              }),
            }
          );
          console.log("✅ Fund Account details saved in database");
        }
      } else {
        throw new Error(data.error?.description);
      }
    } catch (err) {
      alert(err.message || "Failed to create fund account");
    } finally {
      setFundLoading(false);
    }
  };

  // Date formatting function
  const formatClaimedAtDate = (claimedAt) => {
    const date = new Date(claimedAt);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleString("en-IN", options); // Adjust for Indian format (can be changed)
  };

  // Withdraw handler
  // const handleWithdraw = async () => {
  //   setWithdrawLoading(true);
  //   const fundAccountId = localStorage.getItem("razorpay_fund_account_id");

  //   const fundAccountType = localStorage.getItem("razorpay_fund_account_type");
  //   const mode = fundAccountType === "vpa" ? "UPI" : "IMPS";
  //   const userId = JSON.parse(localStorage.getItem("userDetails"))?.userId;

  //   if (!fundAccountId) {
  //     alert("No fund account found. Please create one first.");
  //     return;
  //   }

  //   const payload = {
  //     fundAccountId,
  //     fundAccountType,
  //     amount: availableBalance,
  //     currency: "INR",
  //     mode,
  //     purpose: "payout",
  //     referenceId: "",
  //     narration: "reward",
  //     queueIfLowBalance: true,
  //   };

  //   try {
  //     const res = await fetch(
  //       "https://enfros-solutions-backend-1.onrender.com/api/v1/payout/create-payout",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(payload),
  //       }
  //     );

  //     const data = await res.json();

  //     if (res.ok) {
  //       setPayoutId(data.id);
  //       alert(
  //         `Payout Created: ${data.id}. Rewards withdrawl successfully. It will take some time to reflect in your account`
  //       );
  //       await fetch(
  //         `https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}/claimReward`,
  //         {
  //           method: "PUT",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ amount: availableBalance }), // Record reward claim
  //         }
  //       );
  //     } else {
  //       throw new Error(data.error?.description);
  //     }
  //   } catch (err) {
  //     alert(err.message || "Failed to create payout");
  //   } finally {
  //     setWithdrawLoading(false);
  //   }
  // };

  return (
    <div className="p-4">
      {/* Top Boxes */}
      {/* <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h5 className="mb-0">
            Available Balance: <strong>$1,000.00</strong>
          </h5>
        </Card.Body>
      </Card> */}

      {/* Show Contact ID, Fund Account ID, and Payout ID */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h5 className="mb-0">
            Contact ID: <strong>{contactId || "Not created yet"}</strong>
          </h5>
          <h5 className="mb-0">
            Fund Account ID:{" "}
            <strong>{fundAccountId || "Not created yet"}</strong>
          </h5>
          <h5 className="mb-0">
            Payout ID: <strong>{payoutId || "Not created yet"}</strong>
          </h5>
        </Card.Body>
      </Card>

      {/* Payout Form */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <Card.Title className="mb-0">Create Fund Account</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleCreateFundAccount}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="contactId">
                <Form.Label>Contact ID</Form.Label>
                <Form.Control type="text" value={contactId} readOnly />
              </Form.Group>

              <Form.Group as={Col} controlId="accountType">
                <Form.Label>Account Type</Form.Label>
                <Form.Select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <option value="bank_account">Bank Account</option>
                  <option value="vpa">VPA (UPI)</option>
                </Form.Select>
              </Form.Group>
            </Row>

            {accountType === "bank_account" ? (
              <>
                <Form.Group className="mb-3" controlId="accountHolderName">
                  <Form.Label>Account Holder Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Account Holder Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter IFSC Code"
                    name="ifsc"
                    value={form.ifsc}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Account Number"
                    name="account_number"
                    value={form.account_number}
                    onChange={handleChange}
                  />
                </Form.Group>
              </>
            ) : (
              <Form.Group className="mb-3" controlId="upiId">
                <Form.Label>UPI ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter UPI ID"
                  name="vpa"
                  value={form.vpa}
                  onChange={handleChange}
                />
              </Form.Group>
            )}

            {/* <Button variant="primary" type="submit" disabled={fundLoading}>
              {fundLoading ? (
                <ClipLoader size={18} color="#fff" />
              ) : (
                "Create Fund Account"
              )}
            </Button> */}
          </Form>
        </Card.Body>
      </Card>

      {/* Withdraw Button */}
      {/* <div>
        <Button
          variant="success"
          size="lg"
          className="w-100"
          onClick={handleWithdraw}
          disabled={withdrawLoading}
        >
          {withdrawLoading ? <ClipLoader size={20} color="#fff" /> : "Withdraw"}
        </Button>
      </div> */}
      {/* Submit Button (only saves details) */}
      <div>
        <Button
          variant="success"
          size="lg"
          className="w-100"
          onClick={handleCreateFundAccount}
          disabled={fundLoading}
        >
          {fundLoading ? (
            <ClipLoader size={20} color="#fff" />
          ) : (
            "Submit Payout Details"
          )}
        </Button>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="filter cm-content-box box-primary mt-5">
            <div className={`content-title`}>
              <div className="cpa">
                <i className="fas fa-file-word me-2"></i> Reward Claims
              </div>
              <div className="tools">
                <Link
                  to="#"
                  className={`SlideToolHeader ${open2 ? "collapse" : "expand"}`}
                  onClick={() => setOpen2(!open2)}
                >
                  <i className="fas fa-angle-up"></i>
                </Link>
              </div>
            </div>
            <Collapse in={open2}>
              <div className="cm-content-body form excerpt">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th className="text-left">S.No</th>
                          <th className="text-left">Amount</th>
                          <th className="text-left">Claimed At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userPurchases?.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>₹{item.amount}</td>
                            <td>{formatClaimedAtDate(item.claimedAt)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payout;
