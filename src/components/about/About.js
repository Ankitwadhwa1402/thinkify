import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function About() {
  const content = [
    {
      img: '../../assets/icons/mainIcon.png',
      name: 'Mentions',
      disc: 'Mention anyone on your team to include them in a post.'
    },
    {
      img: '',
      name: 'Polls',
      disc: 'Get a quick gut check from the team on design options.'
    },
    {
      img: '',
      name: 'Resolve comments',
      disc: 'Mark comments as resolved to keep the conversation focused.'
    },

  ]
  return (
    <Stack>
      <Stack sx={{
        flexDirection: 'row-reverse'
      }}>
        <Box sx={{
          background: '#FAFAFA',

        }}>
          <img src={require('../../assets/cards/code.png')} alt='codeImg' />
        </Box>
        <Stack sx={{
          alignItems: "flex-start"
        }}>
          <Stack sx={{
            alignItems: "center",
          }}>
            <Button variant='contained'>
              Share
            </Button>
          </Stack>
          <Stack sx={{
            alignItems: "flex-start",
            textAlign: "start"
          }}>

            <Typography>Share anything you're working on.</Typography>
            <Typography>Campsite has been instrumental in keeping designers aware of
              each others' work-in-progress in a way that was previously
              slowing us down. It's also one of the only channels where. </Typography>
            <Stack sx={{
              flexDirection: 'row'
            }}>
              <Box>Coded</Box>
              <Box>100% Secure</Box>
            </Stack>
          </Stack>
          <Stack>
            See how it works
          </Stack>
        </Stack>

      </Stack>
      <Stack sx={{
        flexDirection: 'row'
      }}>
        <Box sx={{
          background: '#FAFAFA',

        }}>
          <img src={require('../../assets/cards/feedback.png')} alt='codeImg' />
        </Box>
        <Stack sx={{
          alignItems: "flex-start"
        }}>
          <Stack sx={{
            alignItems: "center",
          }}>
            <Button variant='contained'>
              Feedback
            </Button>
          </Stack>
          <Stack sx={{
            alignItems: "flex-start",
            textAlign: "start"
          }}>

            <Typography>Better feedback at the right time.</Typography>
            <Typography>Campsite has been instrumental in keeping designers aware of
              each others' work-in-progress in a way that was previously
              slowing us down. It's also one of the only channels where. </Typography>
          </Stack>
          <Stack>
            See how it works
          </Stack>
        </Stack>

      </Stack>
      <Stack sx={{
        background: `linear-gradient(315deg, #FB432C 0%, #FF591E 100%)`,

      }}>
        <Stack>
          <Typography>Best time here</Typography>
          <Typography>Better feedback at the right time.</Typography>
        </Stack>
        <Stack sx={{
          p: 4,
        }}>
          <Stack sx={{
            background: "black",
            px: 5,
            pb: 8,
          }}>
            <Stack sx={{
              background: "#222222",

            }}>
              <Stack sx={{
                flexDirection: 'row',
              }}>
                <Stack>
                  <Typography>Cloudhub</Typography>
                  <Typography>2m ago in Brand</Typography>
                </Stack>
                <Stack>
                  <Button variant='contained'>View post</Button>
                </Stack>
              </Stack>
              <Stack>
                <Typography>3 people are looking for feedback this week</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{
            flexDirection: 'row',
          }}>
            <Stack sx={{
              flexDirection:'row'
            }}>
              {content?.map((data,index)=>(
                <Stack sx={{
                  background:'black',
                  mt:2,
                  mr:2,
                  color: '#737373',

                }}>
                  <img src={(data?.img)} alt='contentIcon' />
                  <Typography>{data?.name}</Typography>
                  <Typography>{data?.disc}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
