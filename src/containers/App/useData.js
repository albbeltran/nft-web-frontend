import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/getData';

const useData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        getData('https://mocki.io/v1/977e41dd-f0e3-4472-92b9-911ac714df68')
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