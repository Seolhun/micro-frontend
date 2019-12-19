import { createContext } from "react";

import { UserStoreProps } from './type';

class UserState implements UserStoreProps {
	userId: string = '';

	getUserId = () => {
		return this.userId;
	}

	setUserId = (userId: string) => {
		return this.userId = userId;
	}
}

export const UserStore = createContext<UserStoreProps>(new UserState());
