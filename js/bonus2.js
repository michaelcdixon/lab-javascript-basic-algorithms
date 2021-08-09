const isPalindrome = (str) => {
	const cleanStr = clean(str);
	for (let i = 0; i < cleanStr.length / 2; i++) {
		if (cleanStr[i] === cleanStr[cleanStr.length - 1 - i]) {
			return false;
		}
	}

	return true;
};
