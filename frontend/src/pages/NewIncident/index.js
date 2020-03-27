import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

import './styles.css'
export default function NewIncident () {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault()
        const data = {
            title,
            description,
            value
        }
        try{
            await api.post('incidents', data ,{
                headers:{
                    Authorization: ongId
                }
            })
            history.push("/profile")
        }catch(err){
            alert('error ao cadastro de caso')
        }
    } 
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

            <form onSubmit={handleNewIncident}>
                <input 
                    value = {title}
                    onChange = { e => setTitle(e.target.value) }
                    placeholder= "Titulo do caso"/>
                <textarea 
                    value = {description}
                    onChange = { e => setDescription(e.target.value) }
                    placeholder =" Descreva o caso detalhadamente"/>
                <input
                    value = {value}
                    onChange = { e => setValue(e.target.value) } 
                    placeholder="Valor em Reais"/>

                <button className = "button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}