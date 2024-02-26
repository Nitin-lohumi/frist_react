import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/login'
import Pay from './component/play'
import Footer from './component/footer'
function App() {
  return (
    <>
   <br/>
   
      <Login  username="NITIN LOHUMI" getstart="chlooo age"/>
     
     <Pay />

     <br/>

     <Footer name="nitin_company"/>

    </>
  )
}
export default App
