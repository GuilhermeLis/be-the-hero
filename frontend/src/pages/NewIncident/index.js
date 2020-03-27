import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import './styles.css'
export default function NewIncident () {
    return(
        <div className="new-incident-container">
        <div className="container">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastro novo caso </h1>
                <p>
                    Descreva o caso detalhadamente
                    para encontrar um heroi para resolver
                    isso.
                </p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para a Home
                </Link>

            </section>

            <form action="">
                <input placeholder= "Titulo do caso"/>
                <textarea placeholder =" Descreva o caso detalhadamente"/>
                <input placeholder="Valor em Reais"/>

                <button className = "button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}