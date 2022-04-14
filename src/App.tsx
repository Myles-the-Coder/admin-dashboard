import React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider';
import jsonapiClient from 'ra-jsonapi-client';
import { userList } from './Users';

const dataProvider = jsonapiClient('https://commerce-rpg.herokuapp.com');

const App = () => (
	<Admin authProvider={authProvider} dataProvider={dataProvider} requireAuth>
		<Resource name='users/stats' list={userList} />
	</Admin>
);

export default App;
