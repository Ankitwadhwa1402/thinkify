import { Stack, Typography } from '@mui/material'
import React from 'react'
import Review from './Review'

export default function Charts() {
  const content = [
    {
      heading: 'Projects',
      disc: 'Organize, follow, and archive.',
      imagePath:require('../../assets/charts/chart1.png'),

    },
    {
      heading: 'Member profiles',
      disc: 'Automatic portfolios of your work.',
      imagePath:require('../../assets/charts/chart2.png')
    }
  ]
  return (
    <Stack>
      <Stack sx={{
        p:4,
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Stack>
          <Typography class="h3">
            Your Archive of progress
          </Typography>
        </Stack>
        <Stack sx={{
          flexDirection:'row',
          justifyContent:'center',
        }}>
          {content?.map((data, idx) => (

            <Stack sx={{
              background: "#FCFCFC",
              m:2,

            }}>
              <Typography sx={{
              fontSize: '18px',
              fontWeight: 600,
              }}>{data?.heading}</Typography>
              <Typography>{data?.disc}</Typography>
            <img src={(data?.imagePath)} alt='statsImg' style={{
              height:250,
              width:400,
            }} />
            </Stack>
          ))

          }
        </Stack>

      </Stack>
    </Stack>
  )
}
