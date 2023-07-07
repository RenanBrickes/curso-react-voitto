import './Card.css';
import Abibliotecadameianoite from '../../assets/ablibliotecadameianoite.jpg'
export const Card = () => {
    return (
        <div className='card'>
            <h3>Literatura</h3>
            <div className='card-imagem'>
                <img className='livro-imagem' src={Abibliotecadameianoite} alt="Imagem da capa do livro" />
            </div>
            <div className='card-body'>
                <h4>A bliblioteca da meia noite</h4>
                <p>Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela vive se perguntando o que poderia ter acontecido caso tivesse...</p>
            </div>
        </div >
    );
}