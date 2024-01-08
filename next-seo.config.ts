import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
	title: 'E-shop',
    description:'E-commerce with sports equipment',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'http://localhost:3000',
		siteName: 'E-shop',
	},
	
};

export default config;
