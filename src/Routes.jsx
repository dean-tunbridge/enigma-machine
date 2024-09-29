import { createRoutesFromElements, Route } from 'react-router-dom'

import Decrypt from './Decrypt'
import Encrypt from './Encrypt'
import App from './App'
import EnigmaMachine from './EnigmaMachine'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* <Route index element={<App />} /> */}
    <Route path="encrypt" element={<Encrypt />} />
    <Route path="decrypt" element={<Decrypt />} />
    <Route path="enigma" element={<EnigmaMachine />} />
  </Route>
)

export default routes
