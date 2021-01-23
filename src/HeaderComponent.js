import React from 'react'
import { Grid, Typography } from '@material-ui/core';
const HeaderComponent = () => {
  return (
    <Grid container style={{marginTop:'50px',height:'5vh',flexDirection:"row", display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Grid item style={{marginTop:'20px' ,color:'blue',fontFamily:'fantasy'}}>
        <Typography variant="h4"  >
         CRUD OPERATION

        </Typography>

      </Grid>

    </Grid>
  )
}

export default HeaderComponent
