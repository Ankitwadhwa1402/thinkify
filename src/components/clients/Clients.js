import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'

export default function Clients() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const clientsArray = isSmallScreen? [...Array(4).keys()] : [...Array(7).keys()]

  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'wrap'
      }}>
      {clientsArray?.map((val,index)=>(
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
