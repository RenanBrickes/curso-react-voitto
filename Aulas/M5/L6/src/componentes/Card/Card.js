import './Card.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';

export const Card = ({ tipo, livros }) => {
    return (
        <div className='card'>
            <h3>{tipo}</h3>
            <Swiper navigation={true} modules={[Navigation]}>
                {livros && livros.map((value, index) => {
                    return (<SwiperSlide key={index}>
                        <div className='card-imagem'>
                            <img className='livro-imagem' src={value.imagem} alt={`Imagem da capa do livro ${value.titulo}`} />
                        </div>
                        <div className='card-body'>
                            <h4>{value.tituloLivro}</h4>
                            <p>{value.descricao}</p>
                        </div>
                    </SwiperSlide>
                    )
                })}
            </Swiper >
        </div >
    );
}