import { Button, hexToRgb, Stack, Typography } from '@mui/material'
import React from 'react'
import StartFreeButton from '../customButtons/StartFreeButton'
import "./demo.css"
export default function Demo() {
  return (
    <Stack>
      <Stack sx={{
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(315deg, #FB432C 0%, #FF591E 100%)`,
        color: 'white',
      }}>
        <Typography class="h2">
          Keep every one in the loop
        </Typography>
        <Typography class="body2xl">
          All good things starts with a homepage. Get inspired without breaking your wallet.
        </Typography>
        <Stack sx={{
          justifyContent: 'center',
          alignItems: "center",
          m: 2,
        }}>
          <StartFreeButton whiteBackground={true} />
        </Stack>
        <img src={require('../../assets/cards/project.png')} alt='project'
          style={{
            height: '50%',
            width: '50%',
          }}
        />
      </Stack>
      <Stack class="flex center column padding40">
        <img class="margin20" src={require("../../assets/mainLogo.png")} alt='logo'
          style={{
            height: 50,
            width: 50
          }}
        />
        <Typography sx={{
          fontSize: '26px',
          fontWeight: '700',

        }}>Increase your team's visibility and alignment</Typography>
        <Typography class="subheading">Start for free, flexible for all teams.</Typography>
        <Stack
          class="flex row center margin20"
        >
          <Typography sx={{
            mr:2
          }}>Request a demo</Typography>
          <StartFreeButton />
        </Stack>
      </Stack>
    </Stack>
  )
}
