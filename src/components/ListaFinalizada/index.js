import { Tarefa } from "./styled";


export const ListaFinalizada = (props) => {
    return (

        <Tarefa key={props.index}>
            <p>{props.tarefa}</p>
        </Tarefa>
    );
}