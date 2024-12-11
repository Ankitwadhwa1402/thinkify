import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function LovedBy() {
  return (
    <Stack>
      <Typography class="flex center h3">
        Loved By Designers At
      </Typography>
      <Stack sx={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        p:2,
      }}>
        {[...Array(8).keys()].map((val, index) => (
          <img key={`company${val + 1}`} src={require(`../../assets/designers/designer${val + 1}.png`)} alt='companyImg'
            style={{
              width: 280,
              margin: 10,
            }}
          />
        ))
        }

      </Stack>
    </Stack>
  )
}
