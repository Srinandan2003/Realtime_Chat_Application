import './App.css'

import { useEffect } from 'react'
import { Routes , Route , Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SettingPage from './pages/SettingPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

import NavBar from './components/NavBar'

import { useAuthStore } from './store/useAuthStore.js'
import { useThemeStore } from './store/useThemeStore.js'



import { Toaster } from 'react-hot-toast'


function App() {

const {authUser,checkAuth, isCheckingAuth , onlineUsers} = useAuthStore();
const {theme} = useThemeStore();

console.log(onlineUsers)

useEffect(()=>{
  checkAuth();
},[checkAuth])


if(isCheckingAuth && !authUser){
return(
<span className="loading loading-spinner text-warning"></span>
)
}

  return (
    <div data-theme = {theme}>
<NavBar/>
<Routes>

<Route path='/' element={authUser ? <HomePage/> : <Navigate to="/login"/>}/>
<Route path='/signup' element={!authUser ? <SignUpPage/> : <Navigate to = "/"/>}/>
<Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to = "/"/>}/>
<Route path='/settings' element={<SettingPage/>}/>
<Route path='/profile' element={authUser ? <ProfilePage/> : <Navigate to = "/login"/>}/>

</Routes>

<Toaster/>

</div>
  )
}

export default App
