import React from 'react'
import ShopItem from '../../../ShopItem/ShopItem'
import s1 from './../../../assets/szarpaki.jpg'
import s2 from './../../../assets/Szarpaki/szarpak1.jpg'
import s3 from './../../../assets/Szarpaki/szarpak2.jpg'
import s4 from './../../../assets/Szarpaki/szarpak3.jpg'


const Szarpaki = () => {
  const imagesList = [
    {image: `${s1}`, alt: "alt"},
    {image: `${s2}`, alt: "alt"},
    {image: `${s3}`, alt: "alt"},
    {image: `${s4}`, alt: "alt"},
    
  ]

  const descriptionList = [
    {descs: ["Spodniczka bez wzoru, czarna, po 20zł", "Ideanla na lato", "Cena: 1000zł"]},
    {descs: ["Spodniczka bez wzoru, czarna, po 30zł", "Ideanla na lato", "Cena: 80zł"]},
    {descs: ["Spodniczka bez wzoru, czarna, po 40zł", "Ideanla na lato", "Cena: 70zł"]},
    {descs: ["Spodniczka bez wzoru, czarna, po 40zł", "Ideanla na lato", "Cena: 70zł"]},
  ]

  // to jest aktualnie nie uzywane
  const productAllData = {
    title: "Spódniczki standardowe",
    images: {imagesList},
    descriptions: {descriptionList}

  }


  return (
    <ShopItem  
      title="Spodniczka standardowa"
      imagesList={imagesList}
      descriptionList={descriptionList}
    />
  )
}

export default Szarpaki