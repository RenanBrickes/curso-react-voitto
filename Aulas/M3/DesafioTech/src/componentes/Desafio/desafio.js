export const Desafio = ({ texto, boolean, funcao }) => {
    return <div>
        <p>Esse é o exemplos de props</p>
        <p>Props de texto: {texto}</p>
        <p>Props de boolean: {boolean ? "true" : "false"}</p>
        <button onClick={funcao}>Props de função, clique aqui para ver</button>
    </div>
}