import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/getData';

const useData = () => {
    const [data, setData] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [artistData, setArtistData] = useState({});

    useEffect(() => {
        getData('https://mocki.io/v1/e6091f7e-4d69-432f-8eba-6afd949c83ca')
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