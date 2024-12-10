import { Stack, Typography } from '@mui/material'
import React from 'react'
export default function Review() {
  const reviewData = [
    {
      author:'Gabriel Valdivia',
      designation:'Principal Product Designer, Patreon',
      // authorImgPath:require('../../assets/icons/reviewIcon1.png'),
      // icon:require('../../assets/icons/review1.svg'),
      disc: "Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures."
    },
    {
      author:'Buzz Usborne',
      designation:'Principal Designer, Buildkite',
      // authorImgPath:require('../../assets/icons/review1.svg'),
      // icon:require('../../assets/icons/review1.svg'),
      disc:"Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.",
      
    }
  ]
  return (
    <Stack sx={{
      background: "#F9FAFB",
      flexDirection:'row',
      p:4,

    }}>
    {reviewData?.map((data,idx)=>(

      <Stack>
        <img src={''} alt='icon' />
        <Typography>
          {data?.disc}
        </Typography>
        <Stack>
        <Typography>{data?.author}</Typography>
        <Typography>{data?.designation}</Typography>
        </Stack>
      </Stack>
    ))}
    </Stack>
  )
}
