

import Modal01 from "../components/Modals/modal01";
import { useState } from "react";
import Login from "./Login";
const Demo = () => {
    const [bt, setBt] = useState(false)


    return (<>

        <div className="containerTH ">
            <div className="px-5">       <h1 className=" border-bottom">Demo      </h1></div>

            <div className="p-4">
                <div className="text-white">
                    __modals__
                </div>
                <div className="border">
                    <Modal01 demo="true" />
                    <Modal01 demo="true" />



                </div>

            </div>

            <div className="p-4">
                <div className="text-white">
                    __test__
                </div>
                <div className="border p-3">
                    <Login />



                </div>

            </div>











        </div>








    </>);
};

export default Demo;