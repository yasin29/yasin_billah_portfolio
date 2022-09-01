import './index.scss'
import React, { useCallback, useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { photos } from '../../data/photography';
import Loader from 'react-loaders';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Photo = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    console.log(photos);

    const renderPhotos = (photos) => {
        return (
            <>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'P', 'h', 'o', 't', 'o', ' g', 'r', 'a', 'p', 'h', 'y']}
                        idx={15}
                    />
                </h1>
                <div style={{ marginBottom: '15px' }}>{renderPhotos(photos)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Photo;