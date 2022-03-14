import { useState } from 'react'
import image0 from '../../static/photos/photo-test.png'
import image1 from '../../static/photos/photo6.jpg'
import image2 from '../../static/photos/photo5.webp'
import image3 from '../../static/photos/photo4.webp'
import image4 from '../../static/photos/photo3.webp'
import image5 from '../../static/photos/photo2.webp'
import image6 from '../../static/photos/photo1.webp'

import './PhotoSlider.css'

const photos = [image0, image1, image2, image3, image4, image5, image6];

const PhotoSlider = ({ className }) => {
    const [currentImage, setCurrentImage] = useState(photos[0]);

    const classNames = className ? 'photo-slider ' + className : 'photo-slider';

    const onSliderClick = () => {
        const index = photos.indexOf(currentImage);
        index === (photos.length - 1) ? setCurrentImage(photos[0]) : setCurrentImage(photos[index + 1]);
    }

    return (
        <div className={classNames}>
            <div className='slider-image' onClick={onSliderClick}>
                <img src={currentImage} />
            </div>

            <div className='slider-dots'>
                {photos.map(image => (
                    <div key={image} className={image === currentImage ? 'slider-dot active' : 'slider-dot'}/>
                ))}
            </div>
        </div>
    )
}

export default PhotoSlider