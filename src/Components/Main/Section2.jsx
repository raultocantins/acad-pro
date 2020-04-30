import React from 'react'
import {Link} from 'react-router-dom'
import '../Main/Section2.css'
export default function(){
    return (
             
  <section>
          <div class="container" name="cadastro">
            <h1 className="text-center">Pacotes</h1>
            <p className="text-center">Disponibilizamos de vários pacotes para que o <strong>cliente</strong> possa ter a cobertura completa do seu <strong>negócio.</strong></p>
            <div className="row mb-2">
          <i className="col-4 icone">a</i>
          <i className="col-4 icone">b</i>
          <i className="col-4 icone">c</i>
        </div>
            <div class="card-deck mb-3 text-center">
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">Gratuito</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">R$0 </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>30 Alunos</li>
                    <li>2 GB </li>
                    <li>Suporte Mensalidades</li>
                    <li>Suporte 24hrs</li>
                  </ul>
                  <Link type="Link" class="btn btn-lg btn-block btn-outline-danger" to="/register/user" >Inscreva-se Gratuitamente</Link>
                </div>
              </div>
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">Pro</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">R$15 </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>80 Alunos</li>
                    <li>2 GB </li>
                    <li>Suporte Mensalidades</li>
                    <li>Suporte 24hrs</li>
                  </ul>
                  <Link type="button" class="btn btn-lg btn-block btn-danger" to="/register/user">Começar</Link>
                </div>
              </div>
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">Completo</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">R$29 </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Ilimited</li>
                    <li>2 GB </li>
                    <li>Suporte Mensalidades</li>
                    <li>Suporte 24hrs</li>
                  </ul>
                  <Link to="/register/user" type="button" class="btn btn-lg btn-block btn-danger">Contato</Link>
                </div>
              </div>
            </div>
   
          </div>
          </section>
         );
}