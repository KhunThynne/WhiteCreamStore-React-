import { NavLink, Outlet } from "react-router-dom";
import { useState, useRef } from "react";

import { CSSTransition } from 'react-transition-group';
import { IoGridOutline } from "react-icons/io5";
import { AiFillCloseSquare } from "react-icons/ai";
import { IoStorefrontOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { IoHomeOutline } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md"
import Footer from "../../license/Footer";


const MenuNav01 = () => {

    const [btNav, setBtNav] = useState(false);
    const nodeRef = useRef(null);

    const menu = () => {
        return (
            <>
                <div className="d-flex">


                    <div className="mx-3 d-none d-lg-block ">
                        <NavLink to="" className="text " >{`<`}Home?{`>`}</NavLink>
                    </div >
                    <div className="mx-3 d-none d-lg-block ">
                        <NavLink to="blogs" className="text">Blogs</NavLink>
                    </div>
                    <div className="mx-3 d-none d-lg-block ">
                        <NavLink to="demo" className="text">Demo</NavLink>
                    </div>
                    <div className="mx-3 d-none d-lg-block ">

                        <NavLink to="market" className="text ">   <IoStorefrontOutline className="mx-0" />
                            __Market

                        </NavLink>
                    </div>

                    <div className="text-secondary d-none d-lg-block">    ||  </div>

                    <div className="mx-3 d-none d-lg-block ">





                        <NavLink to="action" className="text" onClick={() => setBtNav(false)}><MdRestaurantMenu />ACTION<MdRestaurantMenu /></NavLink>

                    </div>
                </div>
                <div>

                </div>
                <div>
                    <div className="d-none d-lg-block">
                        <NavLink to="contact" className="text">__contact__<TiContacts /></NavLink>
                    </div>
                </div>
            </>
        )

    }
    const menuMobile = () => {
        return (
            <>

                <div className="MenuMobile  py-2 " style={{ height: `100%` }}>



                    <div className="row py-3" >

                        <div>
                            <NavLink to="" className="text w-auto " onClick={() => setBtNav(false)}> <IoHomeOutline />__Home?</NavLink>

                        </div>

                        <div>
                            <NavLink to="blogs" className="text w-auto" onClick={() => setBtNav(false)}>Blogs</NavLink>
                        </div>

                        <div>
                            <NavLink to="demo" className="text w-auto" onClick={() => setBtNav(false)}>Demo</NavLink>

                        </div>

                        <div>
                            <NavLink to="market" className="text w-auto" onClick={() => setBtNav(false)}>   <IoStorefrontOutline className="mx-0" />
                                __Market

                            </NavLink>
                        </div>





                    </div>

                    <div >

                        <hr />
                        <div>

                            <NavLink to="action" className="text w-auto" onClick={() => setBtNav(false)}><MdRestaurantMenu />__Action</NavLink>
                        </div>
                    </div>

                    
                    <div className="row " style={{ position: `absolute`, bottom: "100px" }} >

                        <NavLink to="contact" className="text " onClick={() => setBtNav(false)}><TiContacts />__contact</NavLink>

                    </div>
                </div >
            </>
        )

    }



    if (btNav) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    return (
        <><div className="Menu01 shadow">
            <div className="d-flex   container p-lg-4 p-2 justify-content-between">
                {menu()}

                <div className="d-lg-none ms-auto">
                    <IoGridOutline className="fs-1 p-0 m-0 active " onClick={() => setBtNav(!btNav)}>


                    </IoGridOutline>
                    {


                        < CSSTransition nodeRef={nodeRef} in={btNav} timeout={300} classNames="sidemenu" unmountOnExit
                            appear>
                            <>
                                <div className="sidemenu01 " ref={nodeRef}>

                                    <div className="h-100">

                                        <div className="text-end">
                                            <AiFillCloseSquare className="fs-1 text-danger" onClick={() => setBtNav(!btNav)}>

                                            </AiFillCloseSquare>

                                        </div>
                                        <div className="px-3 h-100 " style={{ overflow: `hidden` }}>
                                            {menuMobile()}
                                        </div>

                                    </div>


                                </div>

                            </>
                        </CSSTransition >



                    }
                </div>



            </div>
        </div >

            <Outlet />

            <Footer />
        </>



    );
};

export default MenuNav01;