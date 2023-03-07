import { createContext, Dispatch,SetStateAction, PropsWithChildren } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

type isOpenNotification={
    isOpen:boolean,
    setIsOpen:Dispatch<SetStateAction<boolean>>,
    closeAddNotification:() => void
}

const AddNotificationContext = createContext<isOpenNotification|undefined>(undefined);
export function AddNotificationProvider({ children }: PropsWithChildren) {
    const [isOpen,setIsOpen]=useState(false);
	const closeAddNotification=()=>{
        setIsOpen(false)
    }

	return (
		<AddNotificationContext.Provider value={{ isOpen,setIsOpen,closeAddNotification}}>
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
