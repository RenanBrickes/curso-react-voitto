import { Formulario } from '../../componentes/Formulario/Formulario';
import { TopBar } from '../../componentes/TopBar/TopBar';
import { Card } from '../../componentes/Card/Card';
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
                <Card />
            </div>
        </div>
    );
}

export default Home;
