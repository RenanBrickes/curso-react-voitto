import { Formulario } from '../../componentes/Formulario/Formulario';
import { TopBar } from '../../componentes/TopBar/TopBar';
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
        </div>
    );
}

export default Home;
