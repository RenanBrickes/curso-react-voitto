import { Formulario } from '../../componentes/Formulario/Formulario';
import { TopBar } from '../../componentes/TopBar/TopBar';
import { Card } from '../../componentes/Card/Card';
import Abibliotecadameianoite from '../../assets/ablibliotecadameianoite.jpg'
import Itacoisa from '../../assets/itACoisa.jpg'
import Tortoarrado from '../../assets/tortoArado.jpg'
import "./Home.css";
import { getLivros } from '../../services/api';
import { useEffect, useState } from 'react';
function Home() {
    const [livros, setLivros] = useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setRefresh(true);
    }, []);

    useEffect(() => {
        if (refresh)
            getLivrosApi().then(result => setLivros(separaLivroPorTipo(result)));
    }, [refresh])

    const separaLivroPorTipo = (livros) => {
        const categoria = {};
        for (const livro of livros) {
            const tipoNome = livro.tipoLivro;

            if (!categoria.hasOwnProperty(tipoNome))
                categoria[tipoNome] = [];

            categoria[tipoNome].push(livro);
        }

        const resultado = [];

        for (const tipoLivro in categoria) {
            resultado.push({
                tipo: tipoLivro,
                livros: categoria[tipoLivro]
            });
        }

        return resultado;
    }
    const getLivrosApi = async () =>
        await getLivros().then((result) => result);
    return (
        <div>
            <header>
                <TopBar />
            </header>
            <div className='div-formulario'>
                <Formulario setRefresh={setRefresh} />
            </div>
            <div className='div-card'>
                {refresh && livros && livros.map((value, index) => {
                    return <Card key={index} tipo={value.tipo} livros={value.livros} />
                })}
            </div>
        </div>
    );
}

export default Home;
