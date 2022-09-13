import { createContext, useState } from "react";
import ChildA from "./ChildA";

const dataContext = createContext();

const Context = ({children}) => {
    const [data, setData] = useState([]);
    return (
        <>
            <dataContext.Provider value={{ data, setData}}>
                <ChildA />{children}
            </dataContext.Provider>
        </>
    )
}

export default Context;
export { dataContext };