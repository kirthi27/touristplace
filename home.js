import React from 'react'
import Carousell from '../Carousell';
import Chennai from './Chennai';
import { Rameshwaram } from './Rameswaram';
import Kodaikanal from './Kodaikanal';
import Ooty from './Ooty';
import Kanyakumari from './Kanyakumari';
import Kumbakonam from './Kumbakanom';
import Madurai from './Madurai';
import Theni from './Theni';
import Yercaud from './yarcaud';
import Hogenakkal from './Hoganakkel';

const home = () => {
  return (
    <div>
      
{/* <br></br> */}
{/* <Route path='/Chennai' element={<Chennai />}/>
      <Route path='/Rameshwaram' element={<Rameshwaram />}/>
        <Route path='/Kodaikanal' element={<Kodaikanal />}/>
        <Route path='/Ooty' element={<Ooty />}/>
        <Route path='/Kanyakumari' element={<Kanyakumari />}/>
        <Route path='/Kumbakonam' element={<Kumbakonam />}/>
        <Route path='/Madurai' element={<Madurai />}/>
        <Route path='/Yercaud' element={<Yercaud />}/>
        <Route path='/Theni' element={<Theni />}/>
        <Route path='/Hogenakkal' element={<Hogenakkal />}/> */}
      
<Carousell/>
      <Chennai />
      <Kodaikanal />
      <Madurai />
      <Kumbakonam />
      <Rameshwaram />
      <Theni />
      <Ooty />
      <Kanyakumari />
      <Yercaud />
      <Hogenakkal />
      <br></br>
      
    </div>
  )
}

export default home
