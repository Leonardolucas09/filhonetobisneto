import { ContainerBisneto } from "./styled";

function Bisneto(props) {
    return(
        <>
        <ContainerBisneto>
            <p>Bisneto</p>
            <p>Botão de componente do Bisneto</p>
            <p>Clique para atualizar o estado do Pai</p>

                <button onClick={props.estadoNeto}>Atualizar Estado</button>
        </ContainerBisneto>
        </>
    )
}

export default Bisneto;