import React from 'react'
import './styles/login.css'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const formElementsWidth = '30vw'


const Login = () => {
  let navigate = useNavigate()

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>VitalSigns</h1>
        <h5 className='welcome-back'>Welcome back! Please enter your details.</h5>

        <Button sx={{ width: formElementsWidth, margin: '20px', color: 'black'}}
        variant='outlined'>
          <img src="./assets/icons/icons8-google.svg" alt="" className='google-icon' />
          Log in with Google
        </Button>
        
        <h3 className='hr'><span className='hr-text'>or</span></h3>
        
        <form className="login-form">
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

          <h5><span className='link'>Forgot password</span></h5>
          
          <Button className='login-btn'
            sx={{ width: formElementsWidth, backgroundColor: 'black'}}
            variant="contained" disableElevation>
            Log in
          </Button>
        </form>

        <h5>
          Don't have an account? <span className='link' onClick={() => navigate('/sign-up')}> Sign up for free</span>
        </h5>

      </div>
      <div className="login-image">
        <img src="./assets/images/login-page-image.jpg" alt="" />
        <a href="https://www.pexels.com/photo/man-in-blue-scrub-suit-using-white-laptop-computer-7578797/">
          Photo by cottonbro studio from Pexels
        </a> 
      </div>
  
    </div>
  )
}

// Photo by <a href="https://unsplash.com/@freestockpro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandr Podvalny</a> on <a href="https://unsplash.com/s/photos/medical-app?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by Karolina Grabowska from Pexels: https://www.pexels.com/photo/medical-stethoscope-with-red-paper-heart-on-white-surface-4386467/
// Photo by cottonbro studio from Pexels: https://www.pexels.com/photo/a-medical-practitioner-showing-a-patient-paper-7578808/
// Photo by cottonbro studio from Pexels: https://www.pexels.com/photo/man-in-blue-scrub-suit-using-white-laptop-computer-7578797/
// Photo by MART  PRODUCTION from Pexels: https://www.pexels.com/photo/people-men-technology-room-7089407/

export default Login