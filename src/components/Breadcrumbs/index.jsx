import HomeIcon from '../../static/icons/home.svg'
import ArrowIcon from '../../static/icons/breadcrumbs-arrow.svg'
import './breadcrumbs.css'

const items = ['БРЮКИ'];

const BreadcrumbItem = ({ children }) => {
    return (
        <div className='breadcrumb'>
            <span className='breadcrumb-text'>{children}</span>
            <img className='breadcrumb-splitter' src={ArrowIcon} alt='>'/>
        </div>
    )
}

const Breadcrumbs = ({ className }) => {
    const classNames = className ? 'breadcrumbs ' + className : 'breadcrumbs'

    return (
        <div className={classNames}>
            <img className='breadcrumb-home' src={HomeIcon} alt='Home'/>
            <img className='breadcrumb-splitter' src={ArrowIcon} alt='>' />
            {items.map(item => (
                <BreadcrumbItem key={item}>{item}</BreadcrumbItem>
            ))}
        </div>
    )
}

export default Breadcrumbs;