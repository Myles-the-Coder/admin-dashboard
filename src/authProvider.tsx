import React from 'react';
import axios from 'axios';
import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
	login: async ({ username, password }) => {
		try {
			const { data } = await axios.post(
				'https://commerce-rpg.herokuapp.com/login',
				{ username, password }
			);
      const {isAdmin, accessToken} = data
			if (!data) {
				throw new Error('No data returned from login');
			}
			if (isAdmin === true) {
				localStorage.setItem('token', accessToken);
			} else {
				throw new Error('User is not an admin');
			}
		} catch (error) {
			console.log(error);
		}
	},
	logout: () => {
		localStorage.removeItem('token');
		return Promise.resolve();
	},
	checkAuth: () =>
		localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
	checkError: error => {
		const { status } = error;
		if (status === 401 || status === 403) {
			localStorage.removeItem('token');
			return Promise.reject();
		}
		// other error code (404, 500, etc): no need to log out
		return Promise.resolve();
	},
	getIdentity: () =>
		Promise.resolve({
			id: 'user',
			fullName: 'John Doe',
		}),
	getPermissions: () => Promise.resolve(''),
	getRoles: () => Promise.reject('Not implemented'),
};

export default authProvider;
