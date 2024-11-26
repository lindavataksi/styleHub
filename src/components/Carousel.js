import React, {useState} from 'react'
import { carouselImages} from './CarouselData'
import './styles/Body.css'
import { PiArrowCircleLeftThin ,PiArrowCircleRightThin} from "react-icons/pi";
// import { IoIosArrowDropright ,  IoIosArrowDropleft } from "react-icons/io";

const Carousel = () => {
    const[index,setIndex]  = useState(0)
    let image = carouselImages[index] 
    function handleNext() {
        if (index < carouselImages.length - 1){
        setIndex((index + 1))
        } else {
            setIndex(0)
        } 
    }
    function handlePrev() {
        if (index === 0){
        setIndex(carouselImages.length - 1)
        } else {
            setIndex(index-1)
        } 
    }

  return (
    <div className='carousel-container' >
        <button className='carousel-button-left' onClick={handleNext}><PiArrowCircleRightThin /></button>
        <img className='carousel-image' src={image.url} alt={image.alt} />
        <button className='carousel-button-right' onClick={handlePrev}><PiArrowCircleLeftThin /></button>
        <button className='carousel-button-men'>SHOP MEN</button>
        <button className='carousel-button-women'>SHOP WOMEN</button>
    </div>
  )
}

export default Carousel
