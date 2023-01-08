import React, { useState } from 'react'
import './styles/dashboard.css'
import './styles/app-page.css'
import Navbar from './Navbar'
import Calendar from './Calendar'

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

var name = 'Rikka Takanashi'
var profilePic = 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'
var weight = 39
var height = 160
var age = 16
var bloodGroup = 'B+'
var diet = ["Eat an apple everyday", "Drink 2 litres of water"]
var exercise = ["Walk 8000 steps", "Do 10 push-ups"]

const appointmentDates = ["2023-01-12 11:00:00", "2023-02-02 11:00:00", "2023-01-04 23:00:00"]


const appDates = new Array(appointmentDates.length) 
var x
for(var i = 0; i < appointmentDates.length; i++){
  x = new Date(appointmentDates[i])
  appDates[i] = x.toLocaleDateString('en-IN', options)
}


const changeDateDetails = (currDate) => {
  Dashboard.currDateDetails(currDate)
} 

const todayDate = new Date()
const todayAppointment = (appDates.indexOf(todayDate.toLocaleDateString('en-IN', options)) < 0) ? ['No appointments'] : ['get details of ' + todayDate.toLocaleString()]

const Dashboard = () => {

  const [dateDetails, setdateDetails] = useState(todayAppointment)
  const [selectedDate, setselectedDate] = useState(todayDate.toLocaleDateString('en-IN', options))

  const currDateDetails = (currDate) => {
    setselectedDate(currDate.toLocaleDateString('en-IN', options))
    if (appDates.indexOf(currDate.toLocaleDateString('en-IN', options)) < 0){
      setdateDetails(['No appointments'])
    }
    else{
      setdateDetails(['get details of ' + currDate.toLocaleDateString()])
    }
  }

  Dashboard.currDateDetails = currDateDetails


  return (
    <div className='app-page'>
      <Navbar />
      <div className="app-body">
        <div className="topbar">
          <h4 className="website-title">VitalSigns</h4> 
          <img src={profilePic} alt="" className="profile-pic" /> 
          <div className="username">{name}</div>
          <img src="./assets/icons/icons8-drop-down.png" alt="" className="dropdown-icon" /> 
        </div>
        <div className="parent">

          <div className="div1 greeting"> 
            <h3> Hi, {name}.</h3>
            <h3>Check your health!</h3>
          </div>


          <div className="div2 patient-info">
            <h4>{age} yrs</h4>
            <h5>Age</h5>
            <h4>{bloodGroup}</h4>
            <h5>Blood Group</h5>
          </div>


          <div className="div3"> 
            <div className="scrollable-card-container">
              <div className="scrollable-card">
                <h4>{weight} kg</h4>
                <h5>Weight</h5>
              </div>
            </div>
          </div>


          <div className="div4">
            <div className="scrollable-card-container">
              <div className="scrollable-card">
                <h4>{height} cm</h4>
                <h5>Height</h5>
              </div>
            </div>
          </div>


          <div className="div5 health-goals">
            <div className="scrollable-card-container">
              <div className="scrollable-card">
                <h4>Health Goals</h4>
                <ul>
                  <li className='red-li'>
                    <strong>Diet</strong>
                    <ul>
                      {diet.map((currItem) => {
                        return (<li>
                          {currItem}
                        </li>)
                      })}
                    </ul>
                  </li>
                  <li className='red-li'>
                    <strong>Exercise</strong>
                    <ul>
                      {exercise.map((currItem) => {
                        return (<li>
                          {currItem}
                        </li>)
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="div6 calendar-div">
            <div className="scrollable-card-container">
              <div className="scrollable-card calendar-box">
                <Calendar className='calendar'/>
              </div>
            </div>
          </div>

          <div className="div7 upcoming-appointments">
            <div className="scrollable-card-container">
              <div className="scrollable-card">
                <h4>Upcoming appointments</h4>
                <ul>
                  {
                    appointmentDates.map((currDate) => {
                      var currDateObject = new Date(currDate) 
                      if (currDateObject < todayDate)
                        return (<></>)
                      else 
                        return (<li className='red-li'>
                          <span>
                          {currDate.toLocaleString()} : {'get appointment data corresponding to this date'}
                          </span>
                        </li>)
                    })
                  }
                </ul>
              </div>
            </div>
          </div>


          <div className="div8">
            <div className="scrollable-card-container">
              <div className="scrollable-card">
                <h4>{selectedDate}</h4>
                <ul>
                  {
                    dateDetails.map((currDetailItem) => {
                      return(
                        <li className='red-li'><span>{currDetailItem}</span></li>
                      )
                    })
                  }
                </ul>
                
              </div>
            </div>
          </div>


        </div> 
      </div>
    </div>    
  )
}

export default Dashboard
export { changeDateDetails }