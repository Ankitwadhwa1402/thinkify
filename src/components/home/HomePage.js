import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import mainIcon from '../../assets/icons/mainIcon.png';
import icons from '../../assets/icons/icons.png';
import "./homeStyles.css"
import StartFreeButton from '../customButtons/StartFreeButton';

export default function HomePage() {
  return (
    <Box>
      <Box class="flex column center">
        <Typography class="h1">
          Create, inspect, and apply synthetic surveillance broadly.
        </Typography>
        <Typography class="body2xl">
          Start with a stunning homepage. Stay motivated without hurting your pocket.
        </Typography>
      </Box>
      <Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: '50vh',
        }}>
          <img src={mainIcon} alt='mainIcon'
            style={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              width: '90%',
              height: '170%',
              transform: `translate(0%,-50%)`
            }} />
          <img src={icons} alt='icons'
            style={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              width: '80%',
              height: '120%',
              transform: `translate(0%,-50%)`


            }}
          />
          <Box class="flex column center" style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: `translate(-50%,50%)`
          }}>
            <StartFreeButton />
            <Box sx={{
              display:'inline',
              color: "#A3A3A3",
              my:2,

            }}>Want to talk or get a live demo?
              <Typography sx={{
                ml:1,
                display:'inline',
                color:'black'
              }}>
                Get in touch →

              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
