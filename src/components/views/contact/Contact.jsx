import { Map } from './components/map/Map.jsx'
import { Info } from './components/info/Info.jsx'
import { Form } from './components/form/Form.jsx'
import './contact.css'

export const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='mapinfo'>
        <Map />
        <Info />
      </div>
      <Form />
    </div>
  )
}
