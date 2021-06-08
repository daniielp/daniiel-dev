import { useState, useEffect } from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { supabase } from '../lib/initSupabase';
import BodyText from '../components/BodyText';
import Slider from '../components/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  section: {
    display: 'flex',
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullHeight: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));

export default function Home() {
  const [infoBox, SetInfoBox] = useState([])

  useEffect(() => {
    fetchInfoBox()
  }, [])

  console.log(infoBox)

  const fetchInfoBox = async () => {
    let { data: infoBox, error } = await supabase.from('InfoBox').select('*').order("Sorting")
    if (error) return console.error('Error', error)
    SetInfoBox(infoBox)
  }

  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Slider />
      <section className={classes.fullHeight}>
        {/* <Typography variant="h3" component="h3" color="textSecondary">- {infoBox[0]?.Subheadline}</Typography>
        <Typography variant="h2" component="h2" color="">{infoBox[0]?.Headline}</Typography>
        <BodyText>{infoBox[0]?.BodyText}</BodyText> */}
      </section>
    </main>
  )
}
