export function getTimeAgo(time: string) {
	const currentTime = new Date();
	const postTime = new Date(time);
	const timeDiff = currentTime.getTime() - postTime.getTime();

	const seconds = Math.floor(timeDiff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return years === 1 ? `${years} año` : `${years} años`;
	} else if (months > 0) {
		return months === 1 ? `${months} mes` : `${months} meses`;
	} else if (days > 0) {
		return days === 1 ? `${days} día` : `${days} días`;
	} else if (hours > 0) {
		return hours === 1 ? `${hours} hora` : `${hours} horas`;
	} else if (minutes > 0) {
		return minutes === 1 ? `${minutes} minuto` : `${minutes} minutos`;
	} else {
		return seconds === 1 ? `${seconds} segundo` : `${seconds} segundos`;
	}
}
