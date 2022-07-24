import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/getData';

const useData = () => {
    const [data, setData] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [artistData, setArtistData] = useState({});

    useEffect(() => {
        getData('https://mocki.io/v1/516846e6-a891-4030-8790-da21ea1372a2')
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