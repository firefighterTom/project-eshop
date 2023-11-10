import { Login } from 'components/LoginPage/Login';
import { Registration } from 'components/LoginPage/RegistrationPage';
import Image from 'next/image'
import {  useState } from 'react';

export default function LoginPage() {
	const [isOpen,setIsOpen]=useState(false)
	return (
		<div className=' h-full  relative flex flex-col justify-center items-center '>
			<Image src='/tennisBallAndShoes.jpg' fill  className=' -z-10 object-cover ' alt='Ball in the corner'/>
			{isOpen && <Login  isOpen={isOpen} setIsOpen={setIsOpen}/>}
			{!isOpen &&<Registration isOpen={isOpen} setIsOpen={setIsOpen}/>}
			</div>
	
	);
}
