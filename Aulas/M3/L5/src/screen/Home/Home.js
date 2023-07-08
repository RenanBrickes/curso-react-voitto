import { Formulario } from '../../componentes/Formulario/Formulario';
import { TopBar } from '../../componentes/TopBar/TopBar';
import { Card } from '../../componentes/Card/Card';
import Abibliotecadameianoite from '../../assets/ablibliotecadameianoite.jpg'
import Itacoisa from '../../assets/itACoisa.jpg'
import Tortoarrado from '../../assets/tortoArado.jpg'
import "./Home.css";
function Home() {
    return (
        <div>
            <header>
                <TopBar />
            </header>
            <div className='div-formulario'>
                <Formulario />
            </div>
            <div className='div-card'>
                <Card titulo="Ficção" imagem={Abibliotecadameianoite} tituloLivro="Ficção" descricao="Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela vive se perguntando o que poderia ter acontecido caso tivesse..." />
                <Card titulo="Horror" imagem={Itacoisa} tituloLivro="Horror" descricao="Nesse clássico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Otários aprende o real sentido da amizade, do amor, da confiança... e do medo. O mais profundo e tenebroso medo." />
                <Card titulo="Literatura" imagem={Tortoarrado} tituloLivro="Literatura" descricao="Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas ― a ponto de uma..." />
            </div>
        </div>
    );
}

export default Home;
