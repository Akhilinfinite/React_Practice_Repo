import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import FirstStep from "./Componet1";
import SecondStep from "./Componet2";
import ThirdStep from "./Componet3";
import FourthStep from "./Componet4";
import FifthStep from "./Componet5";

const steps = [
  "Registration Form",
  "Address Details",
  "Employee Identification Information",
  "Bank Details",
  "Afiliation Details",
];

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleStepClick = (step) => {
    if ((step !== 0 && activeStep !== 0) || step === activeStep) {
      setActiveStep(step);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      case 3:
        return <FourthStep />;
      case 4:
        return <FifthStep />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "2em", display: "flex" }}>
        <div style={{ width: "45%", marginRight: "2em" }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel
                  onClick={() => handleStepClick(index)}
                  style={{
                    cursor: activeStep === 0 ? "default" : "pointer",
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div style={{ width: "55%" }}>
          <Typography variant="h5" gutterBottom>
            {steps[activeStep]}
          </Typography>
          {getStepContent(activeStep)}
          <div style={{ marginTop: "2em" }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? "" : handleNext}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;