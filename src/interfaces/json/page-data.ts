export interface PageData {
	title: string;
	subTitle: string;
	buttonList: Array<ButtonList>;
}

export interface ButtonList {
	type: IconType;
	link: string;
	color?: {
		border: string;
		icon: string;
	}
}

export enum IconType {
	Instagram = 'instagram',
	Facebook = 'facebook',
	Tiktok = 'tiktok',
	YouTube = 'youtube'
}
