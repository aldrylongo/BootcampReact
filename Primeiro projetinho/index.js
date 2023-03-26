var container = document.getElementById("root");
// var titulo = document.createElement("h1");

// titulo.innerHTML = "Titulo inserido pelo javascripto";
// container.appendChild(titulo);

// function Titulo(props){
//     return (
//     <React.Fragment>
//     <h1>{props.texto} {props.subtitulo}</h1>
//     </React.Fragment>
//     );
// }

// function Titulos(){

//     return (
//         <>
//             <Titulo texto="Minha primeira props" subtitulo="Isso é um subtitulo"/>
//             <Titulo texto="Minha segunda props"/>
//             <Titulo texto="Minha terceira props"/>

//         </>
//     )
// }

function Participante(props){

    const [numero, setNumero] = React.useState(0);

    function votar(){
        setNumero(numero+1);
    }

    return(
        <>
            <h1>{props.nome}</h1>
            <h2>{numero}</h2>
            <button onClick={votar}>Votar</button>

        </>
    )
}

function Votacao(){
    return(
        <>
            <Participante nome="Méqui"/>
            <Participante nome="Bks"/>
            <Participante nome="Papais"/>

        </>
    );
}

ReactDOM.createRoot(container).render(<Votacao />);

