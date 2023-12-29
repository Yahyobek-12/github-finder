import './App.css'
import { useState } from 'react'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const [username, setUserName] = useState('')
  const [userData, setUserData] = useState(null)

  const fetchUserData = async () => {
    if (username !== '') {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (response.ok) {
          const data = await response.json()
          setUserData(data)
          console.log(data)
        } else {
          console.error('Error fetching user data', response.status)
        }
      } catch (error) {
        console.error('Error fetching user data', error)
      }
    } else {
      alert('Please enter a username')
    }
  }

  return (
      <BrowserRouter>
        <Navbar username={username} setUserName={setUserName} fetchUserData={fetchUserData} />
        <Home userData={userData} />
      </BrowserRouter>
  )
}

export default App
