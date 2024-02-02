import { useState } from "react";
import ItemData from "../components/ItemData";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [cl, setCl] = useState(0);
    const nav = useNavigate();


    return (<>


        <button className="btn btn-secondary " onClick={() => nav('/blogs', { state: [{ name: 'Thynne' }, { name: 'Thyncsne' }] })}>

            Register

        </button>












    </>);
};

export default Login;