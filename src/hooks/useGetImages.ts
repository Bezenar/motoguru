import {useCallback, useEffect, useState} from 'react';
import {DB} from '../firebase';
import {IMAGES_NAMES} from '../constants/common';

export default function useGetImages(imagesNames: Array<IMAGES_NAMES>): Partial<Record<IMAGES_NAMES, string>> | null {
    const [images, setImages] = useState<Partial<Record<IMAGES_NAMES, string>> | null>(null);

    const getImages = useCallback(async () => {
        const images = await DB.getImages(imagesNames);
        if (images) setImages(images);
    }, imagesNames);

    useEffect(() => {
        getImages();
    }, [getImages]);

    return images;
}
