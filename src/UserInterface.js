import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    justifyContent:'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function UserInterface(){
  const classes = useStyles();
   return(
<div className={classes.root}>
<AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      
    </IconButton>
    <Typography variant="h6" color="inherit" style={{display:"flex",justifyContent:'center',textAlign:'center'}}>
      umair
    </Typography>
  </Toolbar>
</AppBar>
</div>
   );

}
export default UserInterface;