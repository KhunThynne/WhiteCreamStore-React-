import ItemData from "../components/ItemData";



const Home = () => {


    return (<>

        <div className="containerTH ">
            <div className="px-5">       <h1 className=" border-bottom text-th">Home...      </h1></div>



            <div className="d-lg-flex  " style={{ height: `90%` }} >
                <div className=" me-2 mx-auto mb-2 bodyTop bg-white" >


                </div>

                <div className="border overflow-auto  p-1 bg-white" style={{ width: `100%`, height: `80%` }}>
                    <ItemData />

                </div>
            </div>






        </div>








    </>);
};

export default Home;