import { useContext } from "react";


const useCard = () => {
    return useContext (CartContext);

};

export default useCard;