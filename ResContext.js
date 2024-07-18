import { createContext, useContext, useEffect, useState } from "react";

const ResContext = createContext();

export const ResProvider = ({ children }) => {

    const [restaurant, setRestaurant] = useState({}); 
    const [delCost, setDelCost] = useState(restaurant.deliveryCost);

    useEffect(() => {
        setDelCost(restaurant.deliveryCost);
    }, [restaurant])

    return (
        <ResContext.Provider value={{ restaurant, setRestaurant, delCost, setDelCost }}>
            {children}
        </ResContext.Provider>
    );
};

export const useResContext = () => {
    return useContext(ResContext);
};
