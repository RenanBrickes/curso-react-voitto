
const urlBase = "http://localhost:3001";

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

    const respose = await fetch(`${urlBase}/livros`, request);
    const responseJson = await JSON.stringify(respose);
    return responseJson;
};


export const getLivros = async () => {
    const respose = await fetch(`${urlBase}/livros`);
    const responseJson = await respose.json();
    return responseJson;
}

export const getTiposLivro = async () => {
    const respose = await fetch(`${urlBase}/tipos`);
    const responseJson = await respose.json();
    return responseJson;
}