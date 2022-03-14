import Breadcrumbs from '../components/Breadcrumbs';
import Features from '../components/Features';
import PhotoGallery from '../components/PhotoGallery';
import './ImagePanel.css'

const ImagePannel = () => {
    return (
        <div className='image-panel w-not-small'>
            <div className='sidebar w-large'>
                <div className='breadcrumbs-wrapper'>
                    <Breadcrumbs/>
                </div>
                <Features/>
            </div>

            <div className='gallery-wrapper'>
                <Breadcrumbs className='w-medium'/>
                <PhotoGallery/>
            </div>
        </div>
    )
}

export default ImagePannel;