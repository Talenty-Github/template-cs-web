type Languague = 'ES' | 'EN';
type IconType = 'instagram' | 'facebook' | 'tiktok' | 'youtube';

export interface IPageData {
	title: string;
	languague?: Languague | undefined;
	colors: Colors;
	imageUrl: string;
	socialMedia: Array<ISocialMedia>;
}

interface Colors {
	principalColor: string;
	background: string;
	socialColor: string;
	soonColor: string;
}

export interface ISocialMedia {
	type: IconType;
	link: string;
}
