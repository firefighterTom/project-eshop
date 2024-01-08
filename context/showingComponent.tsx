import { PropsWithChildren, createContext, useContext, useState } from 'react';

type componentIdType =
	| 'searchComponent'
	| 'addedToCartNotificationComponent'
	| 'confirmToDeleteItemFromCartNotification';

type ShowingComponentContextType = {
	isOpen: boolean;
};

type ShowingComponentData = {
	searchComponent: ShowingComponentContextType;
	addedToCartNotificationComponent: ShowingComponentContextType;
	confirmToDeleteItemFromCartNotification: ShowingComponentContextType;
	visibilityToggle: (componentId: componentIdType) => void;
};
const initialData = {
	searchComponent: {
		isOpen: false,
	},
	addedToCartNotificationComponent: {
		isOpen: false,
	},

	confirmToDeleteItemFromCartNotification: {
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
			[componentId]: {
				isOpen: !prevData[componentId]?.isOpen,
			},
		}));
		changeOverflowBody(componentId);
	};

	const contextValue = {
		searchComponent: {
			isOpen: data.searchComponent.isOpen,
		},
		addedToCartNotificationComponent: {
			isOpen: data.addedToCartNotificationComponent.isOpen,
		},

		confirmToDeleteItemFromCartNotification: {
			isOpen: data.confirmToDeleteItemFromCartNotification.isOpen,
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
