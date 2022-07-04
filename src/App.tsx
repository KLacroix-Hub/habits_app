import './assets/scss/_main.scss'
import Tab from './assets/components/Tab'
import Button from './assets/components/Button'

function App() {

  return (
    <div className="App">
      <br />
     <div>
     <Button
      content="Default"
      btn_etat='primary'
      icon="true"
      />
      <br />
      <Button
      content="Default"
      btn_etat='secondary'
      icon="true"
      />
      <br />
      <Button
      content="Default"
      btn_etat='warning'
      icon='true'
      />
      <br />
      <Button
      content="Default"
      btn_etat='disable'
      icon='true'
      />
     </div>

      <Tab 
      left_title="machin"
      right_title="bidule"
      />

    </div>
  )
}

export default App
