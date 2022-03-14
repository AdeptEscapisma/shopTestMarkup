import CartButton from '../components/CartButton';
import Dropdown from '../components/Dropdown';
import FavouriteButton from '../components/FavouriteButton';
import Features from '../components/Features';
import InfoHeader from '../components/InfoHeader';
import PhotoSlider from '../components/PhotoSlider';
import Sizes from '../components/Sizes';
import './InfoPanel.css'

const InfoPanel = () => {
    return (
        <div className='info-panel'>
            <InfoHeader/>
            <div className='sizes'>
                <div className='sizes-controls'>
                    <Dropdown/>
                    <CartButton/>
                    <FavouriteButton className='w-large'/>
                </div>

                <div className='sizes-available'>
                    <Sizes/>
                    <div className='sizes-hint'>
                        Как выбрать размер?
                    </div>
                </div>
            </div>
            <PhotoSlider className='w-small'/>
            <div className='description'>
                Безупречный пиджак с мужского плеча, на шелковой подкладке с ассиметричным поясом, подчеркивающим талию
                Прекрасно комбинируется с остальными изделиями из коллекции.
                <br />
                <br />
                Сочетайте с кожаным топом и брюками для рабочего дня в офисе, или же предайте образу дерзости, оставив его в расстегнутом виде.
            </div>
            <Features className='w-not-large' />
        </div>
    )
}

export default InfoPanel;