import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import MedicalRecords from "./components/MedicalRecords"


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path = '/' element={<Login />} />
                <Route path = '/sign-up' element={<Signup />} />
                <Route path = '/dashboard' element={<Dashboard />} />
                <Route path = '/medical-records' element={<MedicalRecords />} />
            </Routes>
        </Router>
    )
}

