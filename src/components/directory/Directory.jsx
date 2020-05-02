import React from 'react';

import MenuItem from '../menu-item/MenuItem';

//  importing redux
import { connect } from "react-redux";
import { selectDirectorySections} from '../../redux/directory/directory.selector';
// importing reselect
import { createStructuredSelector } from 'reselect';

import './directory.scss';

// BEFORE IMPORTING REDUX AND MOVING THE DATA ARRAY INSIDE A REDUCER
// class Directory extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = {
//       		sections: [
//         {
//           title: "DRUMS",
//           imageUrl:
//             "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//           id: 1,
//           linkUrl: "",
//         },
//         {
//           title: "PIANO ",
//           imageUrl:
//             "https://images.unsplash.com/photo-1474711850460-45057e434715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//           id: 2,
//           linkUrl: "",
//         },
//         {
//           title: "BASS GUITARS",
//           imageUrl:
//             "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//           id: 3,
//           linkUrl: "",
//         },
//         {
//           title: "VIOLINS",
//           imageUrl:
//             "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1160&q=80",
//           size: "large",
//           id: 4,
//           linkUrl: "",
//         },
//         {
//           title: "GUITARS",
//           imageUrl:
//             "https://images.unsplash.com/photo-1543062094-d22540cadf2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//           size: "large",
//           id: 5,
//           linkUrl: "",
//         },
//       ],
//     };
// 	}
//  AFTER IMPORTING REDUX
const Directory = ({ sections }) => (
	<div className="directory-menu">
		{
			//  Deconstruct the props
			//  an use map on the sections so it will return a new array iterating over each elements in the sections state

		// {/*	this.state.sections.map(({ id,  title, imageUrl,  size, linkUrl }) => (
		// <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}  /> */}

				//  Other cleaner way to write the code commented above:
			sections.map(({ id,  ...otherSectionProps}) => (
				<MenuItem key={id} {...otherSectionProps}  />
			))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(
	mapStateToProps
)(Directory);

//  It is a Class components because it holds the state of the menu  items and the props of menu items
//  Directory will render the MenuItem,jsx
