function topKFrequent(nums, k) {
	const res = {};

	for (let num of nums) {
		if (!res[num]) {
			res[num] = 1;
		} else {
			res[num]++;
		}





	}
	res.sort();


	return res;

}


var nums = [1, 1, 1, 2, 2, 3];
console.log(topKFrequent(nums, 2));
