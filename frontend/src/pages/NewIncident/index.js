import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../Services/api'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Incident(){
    const history = useHistory();

    const ongId = localStorage.getItem('ong_id');
    
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [valor, setValor] = useState();

    async function handleNewIncident(e){
        e.preventDefaul();
        const data = {
            titulo,
            descricao,
            valor
        };

        try {
            await api.post(`incidents`, data , {headers: 
                {Authorization : ongId}
            });

            history.push('');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }
    return (<div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre ma plataforma e ajude pessoas encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form>
                    <input 
                        placeholder="Titulo do caso"
                        value={titulo}
                        onChange={setTitulo}
                        />
                    <textarea 
                        placeholder="Descrição"
                        value={descricao} 
                        onChange={setDescricao}
                        />
                    <input 
                        placeholder="Valor em Reais"
                        value={valor}
                        onChange={setValor} 
                    />

                    <button onClick={handleNewIncident} className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>)
}