import React from 'react'
import ShopItem from '../../../ShopItem/ShopItem'
import s1 from './../../../assets/SpodniczkiStandardowe/8.jpg'
import s2 from './../../../assets/SpodniczkiStandardowe/6.jpg'
import s3 from './../../../assets/SpodniczkiStandardowe/7.jpg'
import s4 from './../../../assets/SpodniczkiStandardowe/9.jpg'

const SpodniczkiStandardowe = () => {
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

export default SpodniczkiStandardowe