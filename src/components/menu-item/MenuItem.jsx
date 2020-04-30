import React from 'react';

// importing react route dom
import { withRouter } from 'react-router-dom';

import './menuitem.scss';

//  Deconstructuring the props

export const MenuItem = ({
         size,
         imageUrl,
         title,
         history,
		 linkUrl,
		//  adding match to append the url  to the linkUrl props, coming from the Directory.jsx
         match,
       }) => (
         <div className={` ${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);

//  In here it will pass all the props defined in  the Directory.jsx
