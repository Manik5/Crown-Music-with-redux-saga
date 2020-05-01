import React from 'react';

//  function to add the items in the cart
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
//  end
import CustomButton from '../custombutton/CustomButton';

import './collectionitem.scss';

//  addItem ---> function to add the items in the cart
 export const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl} = item;
	 return (
	<div className="collection-item">
		<div
			className="image"
			style={{
			backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">${price}</span>
		</div>
		{/* onClick will trigget the event to add the items in the cart */}
		<CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
	</div>
)};

//  function to add items in the cart
const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

//  using redux to add the function for adding items in the cart
export default connect(
	null,
	mapDispatchToProps
	)(CollectionItem);

//  without react
//  export default CollectionItem;
