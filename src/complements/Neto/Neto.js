
import Bisneto from "../Bisneto/Bisneto";
import { ContainerNeto } from "./styled";

function Neto(props) {
    return(
        <>
        <ContainerNeto>
        Neto
            <Bisneto estadoNeto={props.estadoFilho}/>
        </ContainerNeto>
        </>    
    )
}

export default Neto