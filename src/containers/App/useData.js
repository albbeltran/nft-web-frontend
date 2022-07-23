import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/getData';

const useData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        getData('https://mocki.io/v1/30305c46-10ac-4541-bba2-d71613648edd')
            .then(data => setData(data.data))
            .catch(error => console.log(error));
    }, [])

    const sectionAbout = data.sectionAbout;
    const sectionBehindDesign = data.sectionBehindDesign;
    const sectionRoadmap = data.sectionRoadmap;

    return {
        sectionAbout,
        sectionBehindDesign,
        sectionRoadmap
    };
}

export { useData };