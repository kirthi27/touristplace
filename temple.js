import React from "react";
import image1 from "./images/Home/Chennai.jpeg";
import image2 from "./images/Home/Ooty.jpeg";
import image3 from "./images/Home/Kumbakonam.jpeg";
import image4 from "./images/Home/Theni.jpeg";
import image5 from "./images/Home/rameshwarem1 (5).jpeg";
import image6 from "./images/Home/Kumbakonam(3).jpeg";
import image7 from "./images/Home/Hogenakkal.jpeg";
import image8 from "./images/Home/Kanyakumari.jpeg";

const imagesList = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
      title: "1.Chennai",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
      title: "2.Ooty",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
      title: "3.",
    },
    {
        id: 4,
        src: image4,
        alt: "Image 4",
        title: "2.Ooty",
      },
      {
        id: 5,
        src: image5,
        alt: "Image 5",
        title: "2.Ooty",
      },
      {
        id: 6,
        src: image6,
        alt: "Image 6",
        title: "2.Ooty",
      },
      {
        id: 7,
        src: image7,
        alt: "Image 7",
        title: "2.Ooty",
      },
      {
        id: 8,
        src: image8,
        alt: "Image 8",
        title: "2.Ooty",
      },
  ];

  function temple(){
        return (
          <div>
            
            {imagesList.map((image) => (  
                <img key={image.id}  src={image.src} alt={image.alt} title={image.title} />
            ))}
          </div>
        );
      }
      
      export default temple;
  