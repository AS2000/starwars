import * as React from 'react';
import { CircularProgress } from '@material-ui/core/'

import './Spinner.css';

const Spinner = ({
    isLoading = false,
}) => {
    if (isLoading) {
        return (
            <div className="spinner">
                <CircularProgress color="primary" />
            </div>
        );
    };

    return null;
};

export default Spinner;