
import { useContext } from 'react';
import './Style.css';
import { AssetContext } from './Grandpa';

const Myself = () => {
const gift = useContext(AssetContext)
    return (
        <div className="my">
            <h2>Myself</h2>
            <p>has:{gift}</p>
        </div>
    );
};

export default Myself;