import { Stack } from '@mui/material'
import React from 'react'
import Charts from './Charts'
import Review from './Review'
import LovedBy from './LovedBy'

export default function Stats() {
  return (
    <Stack>
      <Charts />
      <Review />
      <LovedBy />
    </Stack>
  )
}
