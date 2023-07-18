import { ContainerFilho } from "./styled"
import Neto from "../Neto/Neto"

function Filho(props) {
    return(
        <>
        <ContainerFilho>
            Filho
            <Neto estadoFilho={props.estado}/>
        </ContainerFilho>
        </>    
    )
}

export default Filho