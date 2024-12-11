import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import checkbox from '../../assets/icons/checkbox.png';
import play from '../../assets/icons/play.png';
import './About.css'

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
  const seeHowItWorks = () => (
    <Stack sx={{
      display: 'flex',
      flexDirection: "row",
      my: 2,
    }}>
      <img src={play} alt='playIcon' style={{
        height: 20,
        width: 20,
        marginRight: 10,

      }} />See how it works
    </Stack>
  )
  return (
    <Stack>
      <Stack class="flex rowReverse smallScreenContainer">
        <Box sx={{
          flex: 1,
          background: '#FAFAFA',

        }}>
          <img src={require('../../assets/cards/code.png')} alt='codeImg' style={{width:'100%'}}/>
        </Box>
        <Stack sx={{
          alignItems: "flex-start",
          p: 4,
          flex: 1,
        }}>
          <Stack sx={{
            alignItems: "center",
          }}>
            <Button variant='contained' class="primaryButton orangeBackground">
              Share
            </Button>
          </Stack>
          <Stack sx={{
            alignItems: "flex-start",
            textAlign: "start"
          }}>

            <Typography class="h3">Share anything you're working on.</Typography>
            <Typography class="bodyxl aboutSubheading">Campsite has been instrumental in keeping designers aware of
              each others' work-in-progress in a way that was previously
              slowing us down. It's also one of the only channels where. </Typography>
            <Stack sx={{
              flexDirection: 'row'
            }}>
              <Box class="flex center"><img src={checkbox} alt='checkbox' />Coded</Box>
              <Box class="flex center"><img src={checkbox} alt='checkbox' />100% Secure</Box>
            </Stack>
          </Stack>
          {seeHowItWorks()}
        </Stack>

      </Stack>
      <Stack class="flex row smallScreenContainer">
        <Box sx={{
          background: '#FAFAFA',
          flex: 1,

        }}>
          <img src={require('../../assets/cards/feedback.png')} alt='codeImg' />
        </Box>
        <Stack sx={{
          alignItems: "flex-start",
          flex: 1,
          p: 4,

        }}>
          <Stack sx={{
            alignItems: "center",
          }}>
            <Button variant='contained' class="primaryButton orangeBackground">
              Feedback
            </Button>
          </Stack>
          <Stack sx={{
            alignItems: "flex-start",
            textAlign: "start",
          }}>

            <Typography class="h3">Better feedback at the right time.</Typography>
            <Typography class="bodyxl aboutSubheading">Campsite has been instrumental in keeping designers aware of
              each others' work-in-progress in a way that was previously
              slowing us down. It's also one of the only channels where. </Typography>
          </Stack>
          {seeHowItWorks()}
        </Stack>

      </Stack>
      <Stack sx={{
        background: `linear-gradient(315deg, #FB432C 0%, #FF591E 100%)`,

      }}>
        <Stack sx={{
          color: 'white',
          p: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Typography>Best time here</Typography>
          <Typography class="h3">Better feedback at the right time.</Typography>
        </Stack>
        <Stack sx={{
          p: 4,
        }}>
          <Stack sx={{
            background: "black",
            px: 5,
            pb: 8,
            borderRadius: 3,

          }}>
            <Stack sx={{
              background: "#222222",
              p: 2,
              color: 'white',
            }}>
              <Stack sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                mb: 2
              }}>
                <Stack sx={{
                  textAlign: 'left'
                }}>
                  <Typography>Cloudhub</Typography>
                  <Typography sx={{
                    color: "#737373"

                  }}>2m ago in Brand</Typography>
                </Stack>
                <Stack>
                  <Button variant='contained' class="primaryButton">View post</Button>
                </Stack>
              </Stack>
              <Stack sx={{
                textAlign: 'left'
              }}>
                <Typography>3 people are looking for feedback this week</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{
            flexDirection: 'row',
          }}>
            <Stack direction={'row'} spacing={2} sx={{
              py:2,
            }}>
              {content?.map((data, index) => (
                <Stack sx={{
                  background: 'black',
                  mt: 2,
                  color: '#737373',
                  borderRadius: 3,
                  textAlign:'left',
                  p:2,
                }}>
                  <img src={(data?.img)} alt='contentIcon' />
                  <Typography sx={{
                    color:'white',
                  }}>{data?.name}</Typography>
                  <Typography sx={{
                    width:'70%',
                    mb:2,
                  }}>{data?.disc}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
