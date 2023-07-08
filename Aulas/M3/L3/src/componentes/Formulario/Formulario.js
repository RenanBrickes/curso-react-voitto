import { useState } from 'react';
import './Formulario.css';

export const Formulario = ({ setRefresh }) => {
    const [tituloLivro, setTituloLivro] = useState('');
    const [tipoLivro, setTipoLivro] = useState('Literatura');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImage] = useState('');

    const handleSubmitForm = async () => {
        alert(`Titulo do livro: ${tituloLivro}
               Tipo do livro: ${tipoLivro}
               Descrição: ${descricao}
               Imagem: ${imagem}`);
    }
    return (
        <div className="container-formulario">
            <h2>Cadastro de livro</h2>
            <form className='formulario'>
                <div className='imagem-input'>
                    <div>
                        <label>Imagem da capa</label>
                        <img src={imagem} alt="Imagem de capa do livro" className='box-imagem' />
                        <div className='box-input'>
                            <label className='file-upload'>
                                <input
                                    type='file'
                                    name='img'
                                    id='img'
                                    accept='image/*'
                                    onChange={(e) => setImage(e.target.value)}
                                />
                                Upload de imagem
                            </label>
                        </div>
                    </div>
                </div>
                <div className='text-input'>
                    <div>
                        <label>Título do livro</label>
                        <input placeholder='Título do livro'
                            value={tituloLivro}
                            onChange={(event) => setTituloLivro(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Tipo do livro</label>
                        <select onChange={(event) => setTipoLivro(event.target.value)} >
                            <option value="Literatura" >Literatura</option>
                            <option value="Romance" >Romance</option>
                            <option value="Ficção" >Ficção</option>
                            <option value="Horror" >Horror</option>
                        </select>
                    </div>
                    <div>
                        <label>Descrição</label>
                        <textarea
                            rows={5}
                            placeholder='Descrição'
                            onChange={(event) => setDescricao(event.target.value)}
                            value={descricao}
                        />
                    </div>
                </div>
            </form>
            <div className='input-button'>
                <button className='botao-form' type='submit' onClick={handleSubmitForm}  >
                    Cadastrar
                </button>
            </div>
        </div>);
}