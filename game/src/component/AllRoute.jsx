// import Homepage from ' ./Pages/Homepage.jsx';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Characters from '../component/Characters.jsx';
import ExplainGame from '../component/ExplainGame.jsx';
import Popup from '../component/Popup.jsx';
import StagesGame from '../component/StagesGame.jsx';
import Challenge from './Challenge.jsx';
import FindChar from './FindChar.jsx';
import StreetViewMap from './StreetViewMap.jsx';

function AllRoute() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/Characters' element={<Characters />} />
				<Route path='/StagesGame' element={<StagesGame />} />
				<Route path='/ExplainGame' element={<ExplainGame />} />
				<Route path='/Popup' element={<Popup />} />
				<Route path='/FindChar' element={<FindChar />} />
				<Route path='/Challenge/:challengeId' element={<Challenge />} />
				<Route path='/StreetViewMap' element={<StreetViewMap />} />
			</Routes>
		</div>
	);
}

export default AllRoute;
