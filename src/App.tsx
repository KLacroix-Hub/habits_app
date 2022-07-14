import './assets/scss/_main.scss'
// import Tab from './assets/components/Tab'
// import Button from './assets/components/Button'
// import SliderRange from './assets/components/Slider'
import Menu from './assets/components/Menu/Menu'
import { useState } from 'react'
import { LoggedUser } from './assets/interfaces/LoggedUser'
import Onboarding from './assets/pages/Onboarding'

function App() {

  const [isLog, setIsLog] = useState<LoggedUser>({id:999, username:'dd', password:'dd'})

  return (
    <>
    {isLog.id == 999 &&

      <Onboarding />

    }

    {
      isLog.id != 999 &&
      <Menu />
    }
    </>
  )
}

export default App
