import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PlacesChennai from './placeschennai';
import PlacesHoganakkal from './placesHogenakkal';
import PlacesKanyakumari from './placesKanya';
import PlacesKumbakonam from './placeskumbakonam';
import PlacesMadurai from './placesMadurai';
import PlacesOoty from './placesOoty';
import PlacesTheni from './placesTheni';
import PlacesYercaud from './placesYercaud';
import PlacesRameshwaram from './placesRamesh';
import './places.css'; 

const places = () => {
  return  (
    <>
     <div className='place'>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1}).map((_, idx) => (<Col key={0}>
  <Card style={{ width: '37rem',height:'97%' }}>
  <h1 className='p-5'>Tourist Places To visit  In TamilNadu</h1> 
  <p className='ptag'>Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Coonoor, Mudumalai, 
              Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, 
              Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty ghat and More. </p>
               <p>Enjoy a vacation to remember and cherish some amazing experience while touring the most gorgeous 
                places to visit in TamilNadu.With many serene beaches, beautiful temples known for Dravidian Architecture,
                bustling shopping bazaars and adventures wildlife places,these places offer a splendid mix to help you 
                make superb travel itinery.</p>
                <p>Looking forward to visiting the most stunning places to see in TamilNadu ?Well, then you are in for a great time.
                  From the thriving cosmopolition vibes of Chennai to a Emerald tea plantations of ooty and French style houses of Pondicherry
                  to the scenic beauty of kodaikanal,these places will leave you overwhelmed.There is awesome experience in store,
                  whether you are going for leisure,backpacking or looking for an adventure. 
              </p>
           </Card>
     </Col> 
      ))}
        <Col key={1}>
        <Card className='ImageKanya'>
          <Card.Img variant="top" className="kanya" text="Tourist places To visit In TamilNadu" src='https://www.holidify.com/images/bgImages/KANYAKUMARI.jpg'/>
          </Card>
          </Col>
          </Row>
          <br></br>           
          <p>
          The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures.
          Tourist here can choose among many offbeat places like yelagiri and Yercaud to the famous cultural citadels like 
          Mahabalipuram and Madurai.Tamilnadu is also home to southern most land of India-Kanyakumari and one of the char dams-Rameshwaram.
          Whether it is an adventure you are looking for or a religious respite in the temples, these places are delight for anyone wishing to escape
          the hustle and bustle of life.   
          </p>
          
  </div>
<PlacesChennai />
<PlacesHoganakkal />
<PlacesKanyakumari />
<PlacesKumbakonam />
<PlacesMadurai/>
<PlacesOoty />
<PlacesRameshwaram />
<PlacesYercaud />
<PlacesTheni />
  </>
) 
 }         
  


export default places
