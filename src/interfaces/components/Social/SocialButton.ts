export type IconType = 'instagram' | 'facebook' | 'tiktok' | 'youtube';

export default interface ISocialButton {
	link: string;
	type: IconType;
	color: string;
};
