import React, {useState, useEffect} from 'react'
import ServiceMenuComponent from './services-menu';
import ServiceSwiperComponent from './services-slider';

const Services = () => {

    const [size, setSize] = useState(window.innerWidth)

    const onResize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [size])

    const adaptability = size >= 1024 ? <ServiceMenuComponent /> : <ServiceSwiperComponent />;
    
    return(
        <div>
            {
                adaptability
            }
        </div>
    )
}

export default Services;

