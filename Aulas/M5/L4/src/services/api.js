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

export const getLivros = async () => {
    const respose = await fetch('http://localhost:3001/livros');
    const responseJson = await respose.json();
    return responseJson;
}

export const getTiposLivro = async () => {
    const respose = await fetch(`${urlBase}/tipos`);
    const responseJson = await respose.json();
    return responseJson;
}