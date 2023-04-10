import { render } from '@testing-library/react';
import { Login } from '../Login';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Login', () => {
	it('should render email input', () => {
		const { getByLabelText } = render(<Login />);
		expect(getByLabelText('Email')).toBeInTheDocument();
	});
	it('should render all errors', async () => {
		const { findByText, getByText } = render(<Login />);
		const button = getByText('Login');
		await userEvent.click(button);
		const errorEmail = await findByText('Invalid mail');
		const errorPasword = await findByText('Password is a required');
		expect(errorEmail).toBeInTheDocument();
		expect(errorPasword).toBeInTheDocument();
	});
});
