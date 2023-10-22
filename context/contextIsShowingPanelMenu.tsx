import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

type ShowingPanelContextType = {
	isOpen: boolean;
	openPanelMenu: () => void;
	closePanelMenu: () => void;
};
const ShowingPanelMenuContext = createContext<
	ShowingPanelContextType | undefined
>(undefined);

export function ShowingPanelMenuProvider({ children }: PropsWithChildren) {
	const [isOpen, setIsOpen] = useState(true);
	const changeOverflowBody = () => {
		const bodyElement = document.body;
		bodyElement.style.overflow = isOpen ? 'visible' : 'hidden';
	};
	useEffect(() => {
		changeOverflowBody();
	}, [isOpen]);

	const openPanelMenu = () => {
		setIsOpen(!isOpen);
	};
	const closePanelMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<ShowingPanelMenuContext.Provider
			value={{ isOpen, openPanelMenu, closePanelMenu }}>
			{children}
		</ShowingPanelMenuContext.Provider>
	);
}

export const useShowingPanelMenuContext = () => {
	const showingPanelMenuContext = useContext(ShowingPanelMenuContext);
	if (showingPanelMenuContext === undefined) {
		throw new Error('ShowingPanelMenuContext is undefined');
	}
	return showingPanelMenuContext;
};
