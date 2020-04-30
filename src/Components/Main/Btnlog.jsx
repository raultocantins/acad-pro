import React from 'react'
import { Link } from 'react-router-dom'
import '../Main/Btnlog.css'
export default function () {
    return (
        <Link className="btn btn-outline-danger ml-2 mr-5 btn-log" to="/login"  >Entrar</Link>
    );
}