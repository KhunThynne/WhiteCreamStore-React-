import { useState } from 'react';


const Footer = () => {


    const [todos, setTodos] = useState(false);

    const Test = (arg: any) => {

        if (arg) {
            return "dsds"
        } return "c"

    }


    return (<>
        <div className="Footer text-center">
            <div className='item p-3 '>
                Create By DT
            </div>
        </div>







    </>);
};

export default Footer;