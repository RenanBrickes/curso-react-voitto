import { useState } from 'react';
import './TipoLivros.css';
import { postTipoLivros } from '../../services/api';
export const TipoLivros = () => {
    const [tipoLivro, setTipoLivro] = useState();
    const handleSubmitForm = async () => {
        await postTipoLivros({ "nome": tipoLivro });
    }
    return (
        <form className="center" onSubmit={handleSubmitForm}>
            <label>Tipo do livro</label>
            <input value={tipoLivro} onChange={(event) => { event.preventDefault(); setTipoLivro(event.target.value) }} />
            <button onClick={handleSubmitForm} >Cadastrar livro</button>
        </form>
    )
}