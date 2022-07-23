import React from 'react';
import { Box } from './Alert';

const Alert = ({ text }) => {
    return (
        <Box>
            <p>{text}</p>
        </Box>
    )
}

export { Alert };