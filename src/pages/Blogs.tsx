
import { useLocation } from 'react-router-dom';


const Blogs = () => {

    let { state } = useLocation();
    

    




    return (<>
        <div className="containerTH ">
            <div className="px-5">       <h1 className=" border-bottom">Blogs      </h1></div>
 
            {state && state.map((da: any,key:any) => {

                return (<div key={key}><br /> {da.name} </div>)
            }) }

            <div className=" " style={{ height: `90%` }} >

                <div className="border overflow-auto p-lg-5 p-1 " style={{ width: `100%`, height: `80vh` }}>


                </div>
            </div>






        </div>
    </>);
};

export default Blogs;