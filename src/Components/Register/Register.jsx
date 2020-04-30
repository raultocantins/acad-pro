import React from 'react'
import '../Register/Register.css'
export default function () {
    return (

        <div className="box container bg-light mt-2">
            <form action="/" method="POST">
                <h1 className="text-center mt-3">Cadastro de Usuario</h1>
                <div className="row d-flex justify-content-between mt-3">
                    <input type="text" class="form-control col mr-1" placeholder="Nome*" aria-describedby="basic-addon1" />
                    <input type="text" class="form-control col" placeholder="Sobrenome*" aria-describedby="basic-addon1" />
                </div>
                <div className="row d-flex justify-content-between mt-5">
                    <input type="email" class="form-control col mr-1" placeholder="Email*" aria-describedby="basic-addon1" />
                    <input type="password" class="form-control col mr-1" placeholder="Senha*" aria-describedby="basic-addon1" />
                    <input type="password" class="form-control col" placeholder="Confirmar Senha*" aria-describedby="basic-addon1" />
                </div>
                <div className="row d-flex justify-content-between mt-5">
                    <select class="custom-select col mr-2" id="inputGroupSelect01">
                        <option selected>Pergunta de Segurança</option>
                        <option value="1">Qual seu animal favorito?</option>
                        <option value="2">Qual esporte você mais gosta?</option>
                        <option value="3">Nome da(o) melhor professor(a)?</option>
                    </select>
                    <input type="text" class="form-control col" placeholder="Resposta*" aria-describedby="basic-addon1" />
                </div>

                <div className="row d-flex mt-5 justify-content-around">
                    <select id="inputState" class="form-control col-3 mr-4 ">
                        <option selected>Estado</option>
                        <option>TO</option>
                        <option>PA</option>
                        <option>AM</option>
                        <option>MA</option>
                        <option>GO</option>
                        <option>CE</option>
                    </select>

                    <input type="text" placeholder="Cep" class="form-control col-5 mr-4 " id="inputZip" />

                    <select id="inputState" class="form-control col-3 ">
                        <option selected>Sexo</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </select>
                </div>



      

                <div className="row mt-5 d-flex">
                    <button type="submit" class="btn btn-danger btn-lg col">Cadastrar</button>
                </div>




            </form>
        </div>



    );
}