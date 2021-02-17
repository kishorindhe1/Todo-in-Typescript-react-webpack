import { Button, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import * as React from 'react'
const useStyles:any=makeStyles((theme)=>({
    root:{
        background:theme.palette.grey[200],
        
        
    },
    container:{
        align:"center"
    }

}))

function Todo() {
     const classes=useStyles()
    return (
         <Container align="center">
          <Grid  className={classes.root} >
              <Grid item lg={6} color="red" >
                  <Paper>
                  <Typography variant="h1" > kishor</Typography>
                  <TextField variant="outlined" size="small" placeholder="Add Task Here"/>
                  <Button variant="outlined" color="secondary">Add Task</Button>
                  </Paper>
              </Grid>
          </Grid>
             
         </Container>
    )
}

export default Todo
