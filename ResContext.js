import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Toast from 'react-native-toast-message';


const ResContext = createContext();

export const ResProvider = ({ children }) => {

    const [restaurant, setRestaurant] = useState({}); 
    const [curUser, setCurUser] = useState(null);//{id, name}
    const [delCost, setDelCost] = useState(restaurant.deliveryCost);
    const [checked, setChecked] = useState(false);
    const [pastOrders, setPastOrders] = useState([]);
    const [isPastOrder, setIsPastOrder] = useState(false);
    const [curOrder, setCurOrder] = useState(null); 
    const [selectedTheme, setSelectedTheme] = useState("All");



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

    function showToast(txt1, txt2) {
        Toast.show({
            text1: txt1,
            text2: txt2
        })
    }

    function orderToast(fullLength) {
        const period = fullLength/3;
        let count = 0;

        showToast("Ordered successfully", "The order will be at your door in "+parseInt((fullLength-(period*count))/1000)+" minutes");
        count++;
        const intervalId = setInterval(() => {
            if(count < 3)
                showToast("Order is on the way", "The order will be at your door in "+parseInt((fullLength-(period*count))/1000)+" minutes");
            else 
                showToast("Order Arrived", "Enjoy your meal");
            count++
        }, period);

        setTimeout(() => {
            clearInterval(intervalId);
        }, fullLength)
    }

    return (
        <ResContext.Provider value={{ 
            restaurant, setRestaurant, delCost, setDelCost, baseUrl, curUser, setCurUser,checked, setChecked,
            pastOrders, setPastOrders, getPastOrders, isPastOrder, setIsPastOrder, curOrder, setCurOrder,
            selectedTheme, setSelectedTheme, showToast, orderToast
        }}>
            {children}
        </ResContext.Provider>
    );
};

export const useResContext = () => {
    return useContext(ResContext);
};
