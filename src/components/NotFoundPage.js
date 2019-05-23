import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 no findy - <Link to="/dashboard">go back</Link>
    </div>
);

export default NotFoundPage;