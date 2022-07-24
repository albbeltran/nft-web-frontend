import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/getData';

const useData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        getData('https://mocki.io/v1/3b98a69c-e6ea-418e-8933-e6490798ebb6')
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
        FAQ
    };
}

export { useData };