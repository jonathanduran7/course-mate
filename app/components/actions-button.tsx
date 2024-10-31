import { Box, Button } from "@mui/material";
import { useStepperStore } from "../store/stepper.store";

interface ActionsButtonProps {
  isValid: boolean;
}

export default function ActionsButton({ isValid }: ActionsButtonProps) {
  const { handleBack, activeStep } = useStepperStore();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width: '100%' }}>
      <Button
        color="inherit"
        sx={{ mr: 1 }}
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        Back
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      <Button type="submit" disabled={!isValid}>
        Next
      </Button>
    </Box>

  )
}
