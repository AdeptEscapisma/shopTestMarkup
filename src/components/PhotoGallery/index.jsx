import { useState } from 'react'
import './photoGallery.css'

import image0 from '../../static/photos/photo-test.png'
import image1 from '../../static/photos/photo6.jpg'
import image2 from '../../static/photos/photo5.webp'
import image3 from '../../static/photos/photo4.webp'
import image4 from '../../static/photos/photo3.webp'
import image5 from '../../static/photos/photo2.webp'
import image6 from '../../static/photos/photo1.webp'

const photos = [image0, image1, image2, image3, image4, image5, image6];

const PhotoGallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

    const onPhotoCardHover = (e, photo) => {
        setSelectedPhoto(photo);
    }

    return(
        <div className='photo-gallery'>
            <div className='photo-main'>
                <img src={selectedPhoto} alt='Photo placeholder'/>
            </div>
            <div className='photo-list'>
                {photos.map(photo => (
                    <div 
                        key={photo} 
                        className={'photo-list-item' + (selectedPhoto === photo ? ' selected' : '')}
                        onMouseEnter={(e) => onPhotoCardHover(e, photo)}
                    >
                        <img src={photo} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotoGallery;