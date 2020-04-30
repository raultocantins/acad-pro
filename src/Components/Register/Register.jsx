import React from 'react'
import '../Register/Register.css'

export default class Register extends React.Component {

    render() {
        return (
            <div className="container-fluid box d-flex mt-4 bg-danger">
                <div className="row ">
                    <div className="col-md-4 ">

                        <p>inserir carousel de svgs sobre gerenciamento</p>
                    </div>
                    <div className="col-md-8 p-md-4 col-12 p-xs-1 divform mt-3 mb-3   ">
                        <form action="/" method="POST">
                            <h1 className="text-center ">Pessoa Fisica</h1>
                            <p className="text-muted text-center">Cadastre seus dados </p>
                            <div className="row d-flex ">
                                <input type="text" class="form-control col-12  mt-1 " placeholder="Qual seu nome completo?" aria-describedby="basic-addon1" />
                                <input type="email" class="form-control col-6 mt-4 " placeholder="Email*" aria-describedby="basic-addon1" />
                                <input type="password" class="form-control col-3 mt-4  " placeholder="Senha*" aria-describedby="basic-addon1" />
                                <input type="password" class="form-control col-3 mt-4  " placeholder="Confirmar Senha*" aria-describedby="basic-addon1" />
                                <select class="custom-select col-6 mt-4  " id="inputGroupSelect01">
                                    <option selected>Pergunta de Segurança</option>
                                    <option value="1">Qual seu animal favorito?</option>
                                    <option value="2">Qual esporte você mais gosta?</option>
                                    <option value="3">Nome da(o) melhor professor(a)?</option>
                                </select>
                                <input type="text" class="form-control col-6 mt-4  " placeholder="Resposta*" aria-describedby="basic-addon1" />
                                <select id="inputState" class="form-control col-4 mt-4 " >
                                    <option selected>Estado</option>
                                    <option>TO</option>
                                    <option>PA</option>
                                    <option>AM</option>
                                    <option>MA</option>
                                    <option>GO</option>
                                    <option>CE</option>
                                </select>
                                <input type="text" placeholder="Cep" class="form-control col-4 mt-4  " id="inputZip" />
                                <select id="inputState" class="form-control col-4 mt-4  ">
                                    <option selected>Sexo</option>
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </select>
                                <button type="button" class="btn btn-danger btn-md col-md-3 mt-5 ">Próximo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}