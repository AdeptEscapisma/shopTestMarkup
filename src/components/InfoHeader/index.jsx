import ReturnIcon from '../../static/icons/return.svg'
import './infoHeader.css'

const InfoHeader = () => {
    return (
        <div className="info-header">
            <div className="info-name">
                <span>Пиджак CLASP</span>
                <img src={ReturnIcon} alt='Go back' />
            </div>
            <div className="info-price">
                27 000 руб.
            </div>
        </div>
    );
}

export default InfoHeader;