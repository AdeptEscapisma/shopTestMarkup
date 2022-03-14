import React from 'react'
import FeatureRecycled from '../../static/features/feature1.svg'
import FeatureLimitedEdition from '../../static/features/feature2.svg'
import FeatureBoyfriend from '../../static/features/feature3.svg'
import './features.css'

const Features = ({ className }) => {
    const classNames = className ? 'features ' + className : 'features'
    
    return (
        <div className={classNames}>
            <img className='feature' src={FeatureRecycled} alt='100% Recycled PWT'/>
            <img className='feature' src={FeatureLimitedEdition} alt='Limited Edition'/>
            <img className='feature' src={FeatureBoyfriend} alt='Boyfriend Fit'/>
        </div>
    );
}

export default Features