export type IconType = 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'whatsapp';

export default interface ISocialButton {
	link: string;
	type: IconType;
	color: string;
}
