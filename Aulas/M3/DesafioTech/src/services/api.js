
export const postLivros = async (livro) => {
    var Header = new Headers();
    Header.append("Content-Type", "application/json");

    const livroJSON = JSON.stringify(livro);

    var request = {
        method: 'POST',
        headers: Header,
        body: livroJSON,
        redirect: 'follow'
    };

    const respose = await fetch('http://localhost:3001/livros', request);
    const responseJson = await JSON.stringify(respose);
    return responseJson;
};

export const postTipoLivros = async (tipoLivro) => {
    var Header = new Headers();
    Header.append("Content-Type", "application/json");

    const tipoLivroJSON = JSON.stringify(tipoLivro);

    var request = {
        method: 'POST',
        headers: Header,
        body: tipoLivroJSON,
        redirect: 'follow'
    };

    const respose = await fetch('http://localhost:3001/tipos', request);
    const responseJson = await JSON.stringify(respose);
    return responseJson;
};