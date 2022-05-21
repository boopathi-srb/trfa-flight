import React from 'react'
import '../App.css'
// import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import origin from '../Assets/departure.svg'
import destination from '../Assets/arrival.svg'

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
  <div>
    {/* <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} label="Flights"/>
      <Checkbox {...label} />
      <Checkbox {...label} />
    </div> */}
    <div className='flight-input-wrapper' >
    <Box className='flight-input'>
      <img src={origin} alt=''/>
      <TextField  color="secondary" focused placeholder="Origin" ></TextField>  
    </Box >
    <Box className='flight-input'>   
      <img src={destination} alt=''/>
      <TextField  color="secondary" focused placeholder="Destination" ></TextField>     
    </Box>
    </div>
    <div>
 <br/>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Flights</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Passenger"
          
        >
          <MenuItem value={10}>Adult</MenuItem>
          <MenuItem value={20}>Kids</MenuItem>
          <MenuItem value={30}>Infant</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
      <div>
 <br/>
    <Box sx={{ minWidth:10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Class"
        >
          <MenuItem value={10}>Economy</MenuItem>
          <MenuItem value={20}>Premium Economy</MenuItem>
          <MenuItem value={30}>Business</MenuItem>
          <MenuItem value={30}>First</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    <br/>
         
    </div>
  );
}

export const one = () => {
  return (
    <div>one</div>
  )
}
