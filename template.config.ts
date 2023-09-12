import { IconType, type PageData } from './src/interfaces';

const templateData: PageData = {
	title: 'Gringo Gordo West Virginia',
	subTitle: 'Coming Soon this fall...',
	pageColor: '#85D8FF',
	backgroundColor: '#0D202E',
	socialColor: '#FFFFFF',
	imagePreview: {
		src: 'https://firebasestorage.googleapis.com/v0/b/agency-topty.appspot.com/o/gringo_gordowv.png?alt=media&token=7e4625f2-b24b-42c1-8e3d-ab5593fb1016',
		alt: 'This is an example of Alternative Text'
	},
	buttonList: [
		{
			type: IconType.Instagram,
			link: 'https://www.google.com',
			color: {
				icon: '#FFFFFF'
			}
		},
		{
			type: IconType.Tiktok,
			link: 'https://www.google.com',
			color: {
				icon: '#FFFFFF'
			}
		},
		{
			type: IconType.Facebook,
			link: 'https://www.google.com',
			color: {
				icon: '#FFFFFF'
			}
		},
		{
			type: IconType.YouTube,
			link: 'https://www.google.com',
			color: {
				icon: '#FFFFFF'
			}
		}
	]
};

export default templateData;
