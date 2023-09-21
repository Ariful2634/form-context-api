
import { createContext } from "react";
import Father from "./Father";

export const AssetContext = createContext('gold')

export const Grandpa = () => {
    return (
        <div>
            <h2>Grandpa</h2>
            
           <AssetContext.Provider value="gold">
           <Father></Father>
           </AssetContext.Provider>
            
        </div>
    );
};

export default Grandpa;