import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import mainIcon from '../../assets/icons/mainIcon.png';
import icons from '../../assets/icons/icons.png';

export default function HomePage() {
  return (
    <Box>
      <Box>
        <Typography>
          Create, inspect, and apply synthetic surveillance broadly.
        </Typography>
        <Typography>
          Start with a stunning homepage. Stay motivated without hurting your pocket.
        </Typography>
      </Box>
      <Box>
        <Box sx={{
          position: 'relative',
          height: '70vh',
        }}>
          <img src={mainIcon} alt='mainIcon'
            style={{
              position: 'absolute',
              top: '-10%',
              left: 0,
              width: '100%',
              height: '100%',
            }} />
          <img src={icons} alt='icons'
            style={{
              position: 'absolute',
              top: '-10%',
              left: 0,
              width: '100%',
              height: '100%',


            }}
          />
          <Box style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: `translate(-50%,50%)`
          }}>
            <Button variant='contained'
            >
              Start for free
            </Button>
            <Typography>Want to talk or get a live demo?
              Get in touch →</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
