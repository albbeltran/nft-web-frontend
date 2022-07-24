import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/getData';

const useData = () => {
    const [data, setData] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [artistData, setArtistData] = useState({});

    useEffect(() => {
        getData('https://mocki.io/v1/f4103649-7e34-4587-972a-f940098725bd')
            .then(data => setData(data.data))
            .catch(error => console.log(error));
    }, [])

    const {
        sectionAbout,
        sectionBehindDesign,
        sectionRoadmap,
        descAbout,
        descBehindDesign,
        descJoinUs,
        descRoadMap,
        behindDesingSet,
        team,
        FAQ
    } = data;

    return {
        sectionAbout,
        sectionBehindDesign,
        sectionRoadmap,
        descAbout,
        descBehindDesign,
        descJoinUs,
        descRoadMap,
        behindDesingSet,
        team,
        FAQ,
        openModal,
        setOpenModal,
        artistData,
        setArtistData
    };
}

export { useData };