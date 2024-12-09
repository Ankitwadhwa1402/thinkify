import React from 'react'
import { Box } from '@mui/material'

export default function Clients() {
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      }}>
      {[...Array(7).keys()].map((val,index)=>(
        <img key={`company${val+1}`} src={require(`../../assets/companies/company${val+1}.png`)}  alt='companyImg'
          style={{
            width:140,
            margin:20,
          }}
        />
      ))

      }
    </Box>
  )
}
