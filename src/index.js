
module.exports = function towelSort(matrix) {

	if (!matrix || matrix.length == 0) return []; 

	const result = [];

	for (let i = 0; i < matrix.length; i++){
	
			matrix[i].sort((a, b) => a - b);}

		matrix[i].forEach((el) => result.push(el));
	

	return result;
	
}
