import React from 'react'

import Button from '../components/Button'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignInPage } from './SignInPage'

export default function Onboarding() {
  return (
   <BrowserRouter>
   <section className='onboarding-container'>
      <img src="" alt="" />
      <div className='onboarding-container__txt'>
        <h1 className='title title-xl'>Start Cooking</h1>
        <p className='body body-xl'>
        Let’s join our community
        to cook better food!
        </p>
      </div>

      <Button 
      btn_etat='primary'
      icon='false'
      content='Get Started'
      className="onboarding-container__btn"
      LinkTo="/connexion"
      />

    </section>

    <Routes>
      <Route path='/connexion' element={<SignInPage />}></Route>
    </Routes>

   </BrowserRouter>
  )
}
