import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ResContext = createContext();

export const ResProvider = ({ children }) => {

    const [restaurant, setRestaurant] = useState({}); 
    const [curUser, setCurUser] = useState(null);//{id, name}
    const [delCost, setDelCost] = useState(restaurant.deliveryCost);
    const [checked, setChecked] = useState(false);
    const [pastOrders, setPastOrders] = useState([]);
    const [isPastOrder, setIsPastOrder] = useState(false);
    const [curOrder, setCurOrder] = useState(null); 


    useEffect(() => {
        setDelCost(restaurant.deliveryCost);
    }, [restaurant])

    const getPastOrders = async () => {
        const res = await axios.get(`${baseUrl}/order/userId/${curUser.id}`)
        setPastOrders(res.data);
    }

    useEffect(() => {
        if(curUser != null){
            try {
                getPastOrders();
            } catch(e) {
                console.error(e);
            }
        }
    }, [curUser])

    const baseUrl = "https://bk17w1k8-3000.euw.devtunnels.ms";

    return (
        <ResContext.Provider value={{ restaurant, setRestaurant, delCost, setDelCost, baseUrl, curUser, setCurUser, checked, setChecked, pastOrders, setPastOrders, getPastOrders, isPastOrder, setIsPastOrder, curOrder, setCurOrder }}>
            {children}
        </ResContext.Provider>
    );
};

export const useResContext = () => {
    return useContext(ResContext);
};
