import React from 'react';
import { useBreadcrumb } from '../src/components/Breadcrumb';

const Detail = () => {
    useBreadcrumb([
        {
            id: 1,
            text: 'Home',
            href: '/'
        },
        {
            id: 2,
            text: 'About',
            href: '/about'
        },
        {
            id: 3,
            text: 'Detail',
        }
    ]);

    return (
        <div>
            <h1>Detail Page</h1>
        </div>
    );
}

export default Detail;