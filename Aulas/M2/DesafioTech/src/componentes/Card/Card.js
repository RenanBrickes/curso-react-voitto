import './Card.css';

export const Card = ({titulo, imagem, tituloLivro, descricao}) => {
    return (
        <div className='card'>
            <h3>{titulo}</h3>
            <div className='card-imagem'>
                <img className='livro-imagem' src={imagem} alt="Imagem da capa do livro" />
            </div>
            <div className='card-body'>
                <h4>{titulo}</h4>
                <p>{descricao}</p>
            </div>
        </div >
    );
}