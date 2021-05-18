import React from 'react';
import house1 from '../component/assets/img/house1.jpg';
import house2 from '../component/assets/img/house2.jpg';
import house3 from '../component/assets/img/house3.jpg';
import house4 from '../component/assets/img/house4.jpg';
import house5 from '../component/assets/img/house5.jpg';
import house6 from '../component/assets/img/house6.jpg';
import house7 from '../component/assets/img/house7.jpg';
import house8 from '../component/assets/img/house8.jpg';
import house9 from '../component/assets/img/house9.jpg';
import '../component/css/photo.css';

export function PhotoPage() {
    return (
        <div className="photo">
            <section className='photo_items'>
                <img
                src={house1}
                alt='#'
                />
                <img
                src={house2}
                alt='#'
                />
                <img
                src={house3}
                alt='#'
                />
                <img
                src={house4}
                alt='#'
                />
                <img
                src={house5}
                alt='#'
                />
                <img
                src={house6}
                alt='#'
                />
                <img
                src={house7}
                alt='#'
                />
                <img
                src={house8}
                alt='#'
                />
                <img
                src={house9}
                alt='#'
                />
            </section>
        </div>
    );
};