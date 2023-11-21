import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

type ConfirmToDeleteItemType = {
	isConfirmed: boolean;
	setData: Dispatch<SetStateAction<boolean>>;
};

const ConfirmToDeleteItemContext = createContext<
	ConfirmToDeleteItemType | undefined
>(undefined);

export function ConfirmToDeleteItemProvider({ children }: PropsWithChildren) {
	const [data, setData] = useState(false);
	const contextValue = {
		isConfirmed: data,
		setData,
	};
	return (
		<ConfirmToDeleteItemContext.Provider value={contextValue}>
			{children}
		</ConfirmToDeleteItemContext.Provider>
	);
}

export const useConfirmToDeleteItemContext = () => {
	const checkedConfirmToDeleteItemContext = useContext(
		ConfirmToDeleteItemContext
	);
	if (checkedConfirmToDeleteItemContext === undefined) {
		throw new Error('checkedConfirmToDeleteItemContext is undefined');
	}
	return checkedConfirmToDeleteItemContext;
};
