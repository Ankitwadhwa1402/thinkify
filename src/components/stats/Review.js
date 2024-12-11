import { Stack, Typography } from '@mui/material'
import React from 'react'
export default function Review() {
  const reviewData = [
    {
      author: 'Gabriel Valdivia',
      designation: 'Principal Product Designer, Patreon',
      authorImgPath:require('../../assets/icons/author1.png'),
      icon:require('../../assets/icons/review1.png'),
      disc: "Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures."
    },
    {
      author: 'Buzz Usborne',
      designation: 'Principal Designer, Buildkite',
      authorImgPath:require('../../assets/icons/author2.png'),
      icon:require('../../assets/icons/review2.png'),
      disc: "Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.",

    }
  ]
  return (
  <Stack sx={{
      background: "#F9FAFB",
      flexDirection: 'row',
      p: 8,

    }}>
      {reviewData?.map((data, idx) => (

        <Stack sx={{
          textAlign: 'left'
        }}>
          <img src={data?.icon} alt='icon' style={{height:50,width:50}} />
          <Typography sx={{
            fontSize: '18px',
            fontWeight: '400',
            textAlign: 'left',
            margin:'20px 0px',

          }}>
            {data?.disc}
          </Typography>
          <Stack direction={'row'}>
            <Stack>
              <img src={data?.authorImgPath} alt='icon' style={{
                marginRight:20,
                marginBottom:20,
                background:'pink',
                borderRadius:'50%',
                height:'40px',
                width:'40px',
                
              }} />
            </Stack>
            <Stack>
              <Typography>{data?.author}</Typography>
              <Typography sx={{
                color: "#737373",
                fontSize:'14px',

              }}>{data?.designation}</Typography>

            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}
