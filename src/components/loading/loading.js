import React, {memo} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './loading.scss'

const Loading = ({ loading }) => {
    return (
        <>
            {loading ?
                <div className='bg-loading'>
                    <div className="lds-default">
                    <div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div></div>
                </div> : <></>
            }
        </>
    );
}


const LoadingImage = (props) => (
    <>
      <LazyLoadImage
        effect="blur"
        alt={props.alt}
        style={props.styles}
        src={props.src} />
    </>
  );

export {Loading, LoadingImage};
