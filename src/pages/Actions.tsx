import { relative } from "path";
import ItemData from "../components/ItemData";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit, FiCheckSquare } from "react-icons/fi"

const Actions = () => {


    return (<>

        <div className="containerTH">
            <div className="px-5">       <h1 className=" border-bottom">Actions      </h1></div>



            <div className="d-lg-flex  " style={{ height: `90%` }} >
                <div className="border order-2 mx-1 mx-auto mb-2 bodyTop order-2" >


                </div>

                <div className="order-1  p-1" style={{ width: `100%`, height: `80%` }}>
                    <div className=" p-1  " style={{ height: `100%`, borderStyle: `double` }}>

                        <div className="border overflow-auto" style={{ height: `100%`, backgroundColor: `#d6d6d6` }}>
                            <table className="table text-center  " >
                                <thead className="thead-dark table-light fs-5"  >
                                    <tr >
                                        <th scope="col">#</th>
                                        <th scope="col">Col1</th>
                                        <th scope="col">Col2</th>
                                        <th scope="col">Col3</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="table-secondary " >
                                    <tr >
                                        <th scope="row ">1</th>

                                        <td className="overflow-auto " style={{ maxWidth: `10px` }} >Mark</td>
                                        <td className="overflow-auto" style={{ maxWidth: `10px` }}>Ottoccccxfdsf</td>
                                        <td className="overflow-auto " style={{ maxWidth: `10px` }}><span className="">@mdo</span></td>
                                        <td className=" ">
                                            <div className="d-flex justify-content-center">
                                                <FiCheckSquare className="me-1 fs-4 text-success bt-icon" />
                                                <FiEdit className="me-1  fs-4 text-warning bt-icon" />
                                                <AiOutlineDelete className="me-1  fs-4 text-danger bt-icon" /></div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row ">1</th>

                                        <td className="overflow-auto" style={{ maxWidth: `10px` }}>Mark</td>
                                        <td className="overflow-auto" style={{ maxWidth: `10px` }}>Otto</td>
                                        <td className="overflow-auto" style={{ maxWidth: `10px` }}>@mdo</td>
                                        <td className=" ">
                                            <div className="d-flex justify-content-center">
                                                <FiCheckSquare className="me-1 fs-4 text-success bt-icon" />
                                                <FiEdit className="me-1  fs-4 text-warning bt-icon" />
                                                <AiOutlineDelete className="me-1  fs-4 text-danger bt-icon" /></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>


            </div>



        </div>








    </>);
};

export default Actions;