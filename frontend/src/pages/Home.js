import React from 'react';
import { Helmet } from 'react-helmet';
import Cardscg from '../components/Cardscg';
import CgDiv from '../components/CgDiv';
import ProductsC from '../components/ProductsC';
import Slider from '../components/Slider';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Lomien Ecommerce</title>
			</Helmet>
			<div>
				<Slider />
				<div className="cards">
					<Cardscg title="Women" />
					<Cardscg title="Men" />
					<Cardscg title="Accessoires" />
				</div>
				<CgDiv />
				<ProductsC />
			</div>
		</>
	);
};

export default Home;
