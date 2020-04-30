import React from 'react';

import './menuitem.scss';

export const MenuItem = ({ imageUrl, size, title }) => (
         <div className={` ${size} menu-item`}>
           <div
             className="background-image"
             style={{
               backgroundImage: `url(${imageUrl})`,
             }}
           />
           <div className="content">
             <h1 className="title">{title}</h1>
             <span className="subtitle">Shop Now</span>
           </div>
         </div>
       );

export default MenuItem;

//  In here it will pass all the props defined in  the Directory.jsx
