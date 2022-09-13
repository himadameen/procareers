import { createContext, useState } from "react";
import ChildA from "./ChildA";

const dataContext = createContext();

const Context = () => {
    const [data, setData] = useState([]);
    return (
        <>
            <dataContext.Provider value={{ data, setData}}>
                <ChildA />
            </dataContext.Provider>
        </>
    )
}

export default Context;
export { dataContext };