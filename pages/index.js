import { makeStyles } from '@material-ui/core'
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

  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Slider />
      {/* <section className={classes.fullHeight}>
      </section> */}
    </main>
  )
}
