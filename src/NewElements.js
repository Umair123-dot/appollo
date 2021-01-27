import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      // flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(50),
        height: theme.spacing(60),
      },
    },
    inputField: {
        '& > *': {
          
          margin: theme.spacing(1),
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '35ch',
          height: '7ch'
        },
    },
    signUpPaper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(50),
        height: theme.spacing(10),
      },
    },  
    
  }));

  export default useStyles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      // flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(50),
        height: theme.spacing(60),
      },
    },
    inputField: {
        '& > *': {
          
          margin: theme.spacing(1),
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '35ch',
          height: '7ch'
        },
    },
    signUpPaper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(50),
        height: theme.spacing(10),
      },
    },  
    
  }));

  export default useStyles