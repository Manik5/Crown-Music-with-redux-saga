import React from 'react'
import Directory from '../../components/directory/Directory';

// before importing styled library
// import './homepage.scss'

// after importing styled library
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
	<HomePageContainer>
		<Directory />
	</HomePageContainer>
);

export default HomePage;

//  Here it renders the Directory components;
