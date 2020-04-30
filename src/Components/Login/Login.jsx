import React from 'react'
import './Login.css'
import Img_home from '../../svg/1.svg'
import {Link} from 'react-router-dom'
import '../Login/Login.css'
export default function(){
    return (
        <div className="box-login " name="login">
    <form action="/auth/user" method="post">
<h1 className=""></h1>
<img src={Img_home} alt="img_home" className="img_home mb-3"/>

    <input type="email" id="inputEmail" class="form-control mb-3" placeholder="Email address" />
    <input type="password" id="inputSenha" class="form-control mb-3" placeholder="Password" />
    <label className="mb-1 lembraSenha d-flex ">
        <input type="checkbox" name="lembrar" id="lembraSenha" value="remember" />
       <p className="text-center ">Lembrar Senha</p>
       <Link  className="link" to="/register/user">Inscrever-se</Link>
    </label>
    <div className="row">
   <button class="btn btn-md btn-danger btn-block" type="submit">Entrar</button>
    </div>


<h3 className="text-muted mt-5 text-center">© 2017-2022</h3>


    </form>

        </div>
    );
}