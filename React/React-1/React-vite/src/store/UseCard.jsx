import { useContext } from "react";
import{CartContext} from "../store/UserCard"

const useCard = () => {
    return useContext (CartContext);

};

export default useCard;