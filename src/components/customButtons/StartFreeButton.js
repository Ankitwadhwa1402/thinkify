import { Button, Stack } from '@mui/material'
import React from 'react'
import "./buttonStyles.css"

export default function StartFreeButton() {
  return (
    <Stack sx={{
      justifyContent:'center',
      alignItems:'center',
      width:"fit-content",
    }}>
      <Button class="primaryButton">Start for free</Button>
    </Stack>
  )
}
