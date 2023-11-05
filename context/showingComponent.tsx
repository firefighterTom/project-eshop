import { PropsWithChildren, createContext, useContext, useState } from 'react';

type componentIdType =
	| 'searchComponent'
	| 'panelMenuComponent'
	| 'addedToCartNotificationComponent';

type ShowingComponentContextType = {
	isOpen: boolean;
};

type ShowingComponentData = {
	searchComponent: ShowingComponentContextType;
	panelMenuComponent: ShowingComponentContextType;
	addedToCartNotificationComponent: ShowingComponentContextType;
	openComponent: (componentId: componentIdType) => void;
	closeComponent: (componentId: componentIdType) => void;
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

	const openComponent = (componentId: componentIdType) => {
		setData((prevData) => ({
			...prevData,
			[componentId]: { isOpen: true },
		}));
		changeOverflowBody(componentId);
	};
	const closeComponent = (componentId: componentIdType) => {
		setData((prevData) => ({
			...prevData,
			[componentId]: { ...prevData[componentId], isOpen: false },
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
		openComponent,
		closeComponent,
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
