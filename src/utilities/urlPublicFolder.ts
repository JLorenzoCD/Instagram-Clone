export default function urlPublicFolder(urlAsset: string) {
	const url = String(urlAsset)[0] == '/' ? String(urlAsset).substring(1) : String(urlAsset);
	return import.meta.env.BASE_URL + url;
}
