type Languague = 'ES' | 'EN';
type IconType = 'instagram' | 'facebook' | 'tiktok' | 'youtube';

export interface IPageData {
	title: string;
	languague?: Languague | undefined;
	siteUrl: string;
	imageUrl: string;
	colors: Colors;
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
