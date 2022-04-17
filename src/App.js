// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import './Assets/CSS/styles.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container  spacing={1} alignItems="center">
        <Grid item xs={12} lg={12} md={12} sm={12} xl={12} >
          <Container />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
