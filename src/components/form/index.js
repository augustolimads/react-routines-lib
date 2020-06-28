import React, { useState } from 'react'
import * as S from './style'

export default function Form() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        mensagem: ""
    })

    function handleChange(e) {
        setForm({ ...form, [e.target.id]: e.target.value })
        console.log(e.target.value)

    }

    return (
        <S.Form action="">
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                value={form.nome}
                id="nome"
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                value={form.email}
                id="email"
                onChange={handleChange}
            />
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
                type="textarea"
                value={form.mensagem}
                id="mensagem"
                onChange={handleChange}
            />

            <ul>
                <li>Nome: {form.nome}</li>
                <li>Email: {form.email}</li>
                <li>Mensagem: {form.mensagem}</li>
            </ul>

        </S.Form>
    )
}