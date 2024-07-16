import { createContext, useContext, useState } from "react";

const ResContext = createContext();

export const ResProvider = ({ children }) => {

    const [restaurant, setRestaurant] = useState("ds"); 

    return (
        <ResContext.Provider value={{ restaurant, setRestaurant }}>
            {children}
        </ResContext.Provider>
    );
};

export const useResContext = () => {
    return useContext(ResContext);
};
