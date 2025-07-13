import styled from "./notFound.module.css";
import { NavBar } from "../../components/header/NavBar";

function NotFound() {
    return ( 
        <div>
            <NavBar />
            <div className={styled.container}>
                <h1>404</h1>
                <p>not found you age please come back in web site</p>
            </div>
        </div>
     );
}

export default NotFound;