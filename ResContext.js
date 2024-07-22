import { createContext, useContext, useEffect, useState } from "react";

const ResContext = createContext();

export const ResProvider = ({ children }) => {

    const [restaurant, setRestaurant] = useState({}); 
    const [curUser, setCurUser] = useState({});//{id, name}
    const [delCost, setDelCost] = useState(restaurant.deliveryCost);

    useEffect(() => {
        setDelCost(restaurant.deliveryCost);
    }, [restaurant])

    const baseUrl = "https://bk17w1k8-3000.euw.devtunnels.ms";

    return (
        <ResContext.Provider value={{ restaurant, setRestaurant, delCost, setDelCost, baseUrl, curUser, setCurUser }}>
            {children}
        </ResContext.Provider>
    );
};

export const useResContext = () => {
    return useContext(ResContext);
};
