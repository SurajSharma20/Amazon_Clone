import React from 'react'
import "./home.css";
import Banner from "../../assets/images/Bannerrr.jpg"
import Banner1 from "../../assets/images/Banner1.jpg"
import Banner2 from "../../assets/images/Banner2.jpg"
import Cart from '../../components/cart/Cart';
import BookCover1 from "../../assets/images/BookCover12.jpg"
import BookCover2 from "../../assets/images/BookCover2.jpg"
import watch from "../../assets/images/watch.png"
import bracelet from "../../assets/images/bracelet.jpg"
import phone from "../../assets/images/phone.jpeg"

const Home = (props) => {
  return (
    <div className='home'>
      <img src={Banner} className='Banner_image' />
      <img src={Banner1} className='Banner_image'/>
      <img src={Banner2} className='Banner_image'/>

      <div className="cart_row">
        <Cart title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut aspernatur cum delectus maxime tempora autem cumque."} image={BookCover1} price={11.40} rating={5} />
        <Cart  title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut aspernatur cum delectus maxime tempora autem "} image={BookCover2} price={20.29} rating={5}/>
      </div>

      <div className="cart_row">
        <Cart title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut aspernatur cum delectus maxime tempora autem "} image={watch} price={20.29} rating={3}/>

        <Cart title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut aspernatur cum delectus maxime tempora autem "} image={bracelet} price={20.29} rating={5}/>

        <Cart title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut aspernatur cum delectus maxime tempora autem "} image={phone} price={20.29} rating={5}/>
      </div>

      <div className="cart_row">
        <Cart title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut aspernatur cum delectus maxime tempora autem "} image={BookCover1} price={20.29} rating={3}/>
        <Cart title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut aspernatur cum delectus maxime tempora autem "} image={BookCover2} price={20.29} rating={4}/>
        <Cart title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut aspernatur cum delectus maxime tempora autem "} image={bracelet} price={20.29} rating={3}/>
      </div>
    </div>
  )
}

export default Home
