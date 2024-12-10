import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import StartFreeButton from '../customButtons/StartFreeButton'

export default function Demo() {
  return (
    <Stack>
      <Stack sx={{
        justifyContent:'center',
        alignItems:'center',
        background: `linear-gradient(315deg, #FB432C 0%, #FF591E 100%)`,

      }}>
        <Typography>
          Keep every one in the loop
        </Typography>
        <Typography>
          All good things starts with a homepage. Get inspired without breaking your wallet.
        </Typography>
        <Stack sx={{
          justifyContent:'center',
          alignItems:"center"
        }}>
          <StartFreeButton />
        </Stack>
        <img src={require('../../assets/cards/project.png')} alt='project' 
          style={{
            height:'50%',
            width:'50%',
          }}
        />
      </Stack>
      <Stack>
        <Typography>Increase your team’s visibility and alignment</Typography>
        <Typography>Start for free, flexible for all teams.</Typography>
        <Stack
          sx={{
            flexDirection:'row',
          }}
        >
          <Typography>Request a demo</Typography>
          <StartFreeButton />
        </Stack>
      </Stack>
    </Stack>
  )
}
