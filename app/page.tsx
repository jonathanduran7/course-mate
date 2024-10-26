'use client'
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { createRef, useEffect } from "react";
import PersonalInformation from "./components/personal-information";
import CourseInformation from "./components/course-information";
import MethodPayment from "./components/method-payment";
import Summary from "./components/summary";
import { useFormStore } from "./store/form.store";
import { FormikProps } from "formik";
import { useStepperStore } from "./store/stepper.store";

const steps = ['Informacion Personal', 'Informacion del curso', 'Metodo de Pago', 'Confirmacion'];
const stepsContent = [
  {
    step: 0,
    component: PersonalInformation
  },
  {
    step: 1,
    component: CourseInformation
  },
  {
    step: 2,
    component: MethodPayment
  },
  {
    step: 3,
    component: Summary
  }
]

export default function Home() {

  const { activeStep, handleReset } = useStepperStore();

  return (
    <div className="min-h-screen sm:p-20">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <div className="h-[510px] flex flex-col justify-between p-5">
            {stepsContent.map((content, index) => {
              if (content.step === activeStep) {
                const Component = content.component;
                return <Component key={index} />;
              }
            })}
          </div>
        )}
      </Box>
    </div>
  );
}
