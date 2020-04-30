import React from 'react'
import './Main.css'
import Section1 from '../Main/Section1'
import Section2 from '../Main/Section2'
import Header from '../../Components/Main/Header'
import Footer from '../../Components/Main/Footer'
export default function(){
  return (
    <React.Fragment>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
          <Footer></Footer>
    </React.Fragment>
  );
}