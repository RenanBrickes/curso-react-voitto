import { useState } from 'react';
import './Formulario.css';
import { postLivros } from '../../services/api';

export const Formulario = ({ setRefresh }) => {
    const valorPadraoImagem = { src: '', base64: '' };
    const [imagem, setImagem] = useState(valorPadraoImagem);
    const [imageRequired, setImageRequired] = useState();
    const [tituloLivro, setTituloLivro] = useState('');
    const [tituloLivroRequired, setTituloLivroRequered] = useState();
    const [tipoLivro, setTipoLivro] = useState('Literatura');
    const [tipoLivroRequired, setTipoLivroRequired] = useState();
    const [descricao, setDescricao] = useState('');
    const [descricaoRequired, setDescricaoRequired] = useState();

    const handleSubmitForm = async () => {
        if (inputIsValid()) {
            setRefresh(false);
            const novoLivro = {
                imagem: imagem.base64,
                tituloLivro: tituloLivro,
                tipoLivro: tipoLivro,
                descricao: descricao
            };
            await postLivros(novoLivro);
            setRefresh(true);
            limparCampos();
        }
    }


    const handleChangeImagem = async (event) => {
        const arquivoImagem = event.target.files[0];
        const imagemBase64 = await convertBase64(arquivoImagem);
        setImagem({ src: URL.createObjectURL(arquivoImagem), base64: imagemBase64 });
    }

    const convertBase64 = async (file) => {
        return new Promise((resolver, reject) => {
            const fileRender = new FileReader();
            fileRender.readAsDataURL(file);
            fileRender.onload = () => {
                resolver(fileRender.result);
            };
            fileRender.onerror = (error) => {
                reject(error);
            }
        });
    }

    const inputIsValid = () => {
        if (imagem.src === '' || imagem.base64 === '') {
            setImageRequired('A Imagem é um campo obrigatório.');
            return false;
        }
        if (tituloLivro === undefined) {
            setTituloLivroRequered('O Título do livro é um campo obrigatório.');
            return false;
        }
        if (tipoLivro === undefined) {
            setTipoLivroRequired('O Tipo do livro é um campo obrigatório.');
            return false;
        }
        if (descricao === undefined) {
            setDescricaoRequired('A Descrição é um campo obrigatório.');
            return false;
        }
        return true;
    }

    const limparCampos = () => {
        setImagem(valorPadraoImagem);
        setTituloLivro('');
        setTipoLivro('');
        setDescricao('');
    }

    return (
        <div className="container-formulario">
            <h2>Cadastro de livro</h2>
            <form className='formulario' onSubmit={handleSubmitForm} >
                <div className='imagem-input'>
                    <div>
                        <label>Imagem da capa</label>
                        <img src={imagem.src} alt={"Imagem de capa do livro " + tituloLivro ? tituloLivro : ""} className='box-imagem' />
                        <div className='box-input'>
                            <label className='file-upload'>
                                <input
                                    type='file'
                                    name='img'
                                    id='img'
                                    accept='image/*'
                                    onChange={handleChangeImagem}
                                />
                                Upload de imagem
                            </label>
                        </div>
                        {imageRequired && <label className='campo-requerido'>{imageRequired}</label>}
                    </div>
                </div>
                <div className='text-input'>
                    <div>
                        <label>Título do livro</label>
                        <input placeholder='Título do livro'
                            value={tituloLivro}
                            onChange={(event) => setTituloLivro(event.target.value)}
                        />
                        {tituloLivroRequired && <label className='campo-requerido'>{tituloLivroRequired}</label>}
                    </div>
                    <div>
                        <label>Tipo do livro</label>
                        <select onChange={(event) => setTipoLivro(event.target.value)} >
                            <option value="Literatura" >Literatura</option>
                            <option value="Romance" >Romance</option>
                            <option value="Ficção" >Ficção</option>
                            <option value="Horror" >Horror</option>
                        </select>
                        {tipoLivroRequired && <label className='campo-requerido'>{tipoLivroRequired}</label>}
                    </div>
                    <div>
                        <label>Descrição</label>
                        <textarea
                            rows={5}
                            placeholder='Descrição'
                            onChange={(event) => setDescricao(event.target.value)}
                            value={descricao}
                        />
                        {descricaoRequired && <label className='campo-requerido'>{descricaoRequired}</label>}
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