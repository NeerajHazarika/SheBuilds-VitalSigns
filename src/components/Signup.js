import React from 'react'
import './styles/signup.css'
import { Button, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const formElementsWidth = '30vw'

const Signup = () => {
  let navigate = useNavigate()

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>VitalSigns</h1>
        
        <form className="signup-form">
        <div className="textfield-container">
            <TextField required id = 'name' label = 'Name' variant='standard'
                sx={{
                    input: {
                        width: formElementsWidth,
                    },
                    margin: '10px 0px'
                }} />
          </div>
          <div className="textfield-container">
            <TextField required id = 'email' label = 'Email' variant='standard'
                sx={{
                    input: {
                        width: formElementsWidth,
                    },
                    margin: '10px 0px'
                }} />
          </div>
          <div className="textfield-container">
            <TextField required id = 'password' label = 'Password' type='password' variant='standard'
                sx={{
                    input: {
                        width: formElementsWidth,
                    },
                    margin: '10px 0px'
                }} />
          </div>

          <FormControl sx={{margin: '20px 0'}} required>
            <FormLabel id="account-radio-btn-grp-label">Account type</FormLabel>
            <RadioGroup name="account-radio-btn-grp" row>
              <FormControlLabel value="Patient" control={<Radio />} label="Patient" />
              <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
            </RadioGroup>
          </FormControl>
          <br />
          
          <Button className='signup-btn'
            sx={{ width: formElementsWidth, backgroundColor: 'black'}}
            variant="contained" disableElevation>
            Create account
          </Button>

        </form>

        <Button sx={{ width: formElementsWidth, margin: '20px 0 0 0', color: 'black'}}
        variant='outlined'>
          <img src="./assets/icons/icons8-google.svg" alt="" className='google-icon' />
          Sign up with Google as Patient
        </Button>
        <Button sx={{ width: formElementsWidth, margin: '10px 0 0 0', color: 'black'}}
        variant='outlined'>
          <img src="./assets/icons/icons8-google.svg" alt="" className='google-icon' />
          Sign up with Google as Doctor
        </Button>

        <h5>
          Already have an account? <span className='link' onClick={() => navigate('/')}> Log in</span>
        </h5>

      </div>
      <div className="signup-image">
        <img src="./assets/images/signup-page-image.jpg" alt="" />
        <a href="https://www.pexels.com/photo/people-men-technology-room-7089407/">
          Photo by MART  PRODUCTION from Pexels
        </a> 
      </div>
  
    </div>
  )
}

export default Signup