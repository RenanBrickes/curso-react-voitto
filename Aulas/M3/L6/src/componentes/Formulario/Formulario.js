import './Formulario.css';

export const Formulario = () => {
    return (
        <div className="container-formulario">
            <h2>Cadastro de livro</h2>
            <form className='formulario'>
                <div className='imagem-input'>
                    <div>
                        <label>Imagem da capa</label>
                        <img className='box-imagem' />
                        <div className='box-input'>
                            <label className='file-upload'>
                                <input
                                    type='file'
                                    name='img'
                                    id='img'
                                    accept='image/*'
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
                        />
                    </div>
                    <div>
                        <label>Tipo do livro</label>
                        <select>
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
                        />
                    </div>
                </div>
            </form>
            <div className='input-button'>
                <button className='botao-form' type='submit' >
                    Cadastrar
                </button>
            </div>
        </div>);
}