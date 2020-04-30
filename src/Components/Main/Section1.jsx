import React from 'react'
import Rack from '../../svg/rack.svg'
import Bike from '../../svg/bike.svg'
import Lifter from '../../svg/lifter.svg'
import './Section1.css'

export default function () {
  return (
    <section className="apresentation">
      <div class="container mb-5 mt-3">
        <h1 class="text-center ">BEM VINDOS AO <strong>ACAD-PRO</strong></h1>
        <p class="text-center mt-3" >Gerencie sua academia ou estudio <strong>GYM</strong> da melhor forma possivel, Analisando o <strong>RENDIMENTO</strong> do
        seu <strong>NEGÓCIO.</strong></p>
       
        <div className="container slide">
          <div id="carouselpainel" class="carousel slide mt-0 mb-3 d-flex justify-content-center " data-ride="carousel">
            <div class="carousel-inner" style={{ width: '400px' }}>
              <a href="" class="carousel-item active">
                <img src={Rack} alt="peso" />
              </a>
              <a href="/teste" class="carousel-item ">
                <img src={Bike} class=" d-flex ml-auto mr-auto" alt="atleta" />
              </a>
              <a href="/teste" class="carousel-item">
                <img src={Lifter} class=" d-flex ml-auto mr-auto" alt="atleta" />
              </a>
            </div>

          </div>
        </div>
        <button class="btn btn-lg btn-outline-danger ml-2 d-flex ml-auto mr-auto">Get started</button>
      </div>
    </section>
  );
}