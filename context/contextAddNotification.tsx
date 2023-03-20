import {
	createContext,
	PropsWithChildren,
} from 'react';
import { useState } from 'react';
import { useContext } from 'react';

type isOpenNotification = {
	isOpen: boolean;
	showNotification: () => void;
	closeNotification: () => void;
	closeOnTimeNotification: () => void;
};

const AddNotificationContext = createContext<isOpenNotification | undefined>(
	undefined
);
export function AddNotificationProvider({ children }: PropsWithChildren) {
	const [isOpen, setIsOpen] = useState(false);
	const closeNotification = () => {
		setIsOpen(false);
	};
	const showNotification = () => {
		setIsOpen(true);
	};
	const closeOnTimeNotification = () => {
		setTimeout(() => {
			closeNotification();
		}, 5000);
	};
	return (
		<AddNotificationContext.Provider
			value={{
				isOpen,
				closeNotification,
				showNotification,
				closeOnTimeNotification,
			}}>
			{children}
		</AddNotificationContext.Provider>
	);
}
export const useAddNotificationContext = () => {
	const addNotificationContext = useContext(AddNotificationContext);
	if (AddNotificationContext === undefined) {
		throw new Error('AddNotificationContext is undefined');
	}
	return addNotificationContext;
};
