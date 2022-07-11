import React from 'react'
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';



export default function ServerChange(){
    return(
      <Card  sx={{ maxWidth: 800,marginLeft:50 ,marginTop:10}}>
      <CardMedia
        component="img"
        height="350"
        image="ServerAer.png"
        
      
      />
      <CardContent>
        <Typography id="fullWidth" >
          Aeroleader is moved to a new server. 
          Please click on the link below to access Aeroleader.
        </Typography>
      </CardContent>

      <Link
       variant="h6"
       href="https://aeroleader.skf.net">
    Aeroleader
    </Link>
    
        </Card>
    );
  }
 

  