function futurePeople(population, n) {
	const months = 12 * 30;
	return population +  months * n;
}
console.log(futurePeople(256, 2))