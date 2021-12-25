import style from "../styles/estiloso.module.css"

export default function Cabecalho(props){
    return <div className={style.roxo}>
        <h1 >{props.titulo}</h1>
    </div>
}