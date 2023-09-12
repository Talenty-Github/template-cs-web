export interface PageData {
	title: string;
	subTitle: string;
	pageColor: string;
	backgroundColor?: string;
	socialColor: string;
	imagePreview: ImagePreview;
	buttonList: Array<ButtonList>;
}

export interface ButtonList {
	type: IconType;
	link: string;
	color?: {
		border?: string;
		icon?: string;
	}
}

interface ImagePreview {
	src: string;
	alt: string;
}

export enum IconType {
	Instagram = 'instagram',
	Facebook = 'facebook',
	Tiktok = 'tiktok',
	YouTube = 'youtube'
}
