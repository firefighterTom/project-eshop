import { PropsWithChildren, createContext, useContext, useState } from 'react';

type componentIdType =
	| 'searchComponent'
	| 'panelMenuComponent'
	| 'addedToCartNotificationComponent'
	| 'switchBetweenLoginAndRegistrationComponents';

type ShowingComponentContextType = {
	isOpen: boolean;
};

type ShowingComponentData = {
	searchComponent: ShowingComponentContextType;
	panelMenuComponent: ShowingComponentContextType;
	addedToCartNotificationComponent: ShowingComponentContextType;
	switchBetweenLoginAndRegistrationComponents: ShowingComponentContextType;
	visibilityToggle: (componentId: componentIdType) => void;
	
};
const initialData = {
	searchComponent: {
		isOpen: false,
	},
	panelMenuComponent: {
		isOpen: false,
	},
	addedToCartNotificationComponent: {
		isOpen: false,
	},
	switchBetweenLoginAndRegistrationComponents: {
		isOpen: false,
	},
};

const ShowingComponentContext = createContext<ShowingComponentData | undefined>(
	undefined
);

export function ShowingComponentProvider({ children }: PropsWithChildren) {
	const [data, setData] = useState(initialData);
	const changeOverflowBody = (componentId: componentIdType) => {
		const bodyElement = document.body;
		bodyElement.style.overflow = data[componentId].isOpen
			? 'visible'
			: 'hidden';
	};

	const visibilityToggle = (componentId: componentIdType) => {
		setData((prevData) => ({
			...prevData,
			[componentId]: { isOpen: !prevData[componentId]?.isOpen },
		}));
		changeOverflowBody(componentId);
	};
	
	const contextValue = {
		searchComponent: {
			isOpen: data.searchComponent.isOpen,
		},
		panelMenuComponent: {
			isOpen: data.panelMenuComponent.isOpen,
		},
		addedToCartNotificationComponent: {
			isOpen: data.addedToCartNotificationComponent.isOpen,
		},
		switchBetweenLoginAndRegistrationComponents: {
			isOpen: data.switchBetweenLoginAndRegistrationComponents.isOpen,
		},

		visibilityToggle,
		
	};
	return (
		<ShowingComponentContext.Provider value={contextValue}>
			{children}
		</ShowingComponentContext.Provider>
	);
}

export const useShowingComponentContext = () => {
	const showingComponentContext = useContext(ShowingComponentContext);
	if (showingComponentContext === undefined) {
		throw new Error('showingComponentContext is undefined');
	}
	return showingComponentContext;
};
