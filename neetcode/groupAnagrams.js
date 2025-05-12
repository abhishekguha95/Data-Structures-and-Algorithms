/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	const char_freq = new Map();
	for (ele of strs) {
		const signatureString = getSignatureString(ele);
		if (char_freq.has(signatureString)) {
			char_freq.get(signatureString).push(ele);
		} else {
			char_freq.set(signatureString, [ele]);
		}
	}
	return Array.from(char_freq.values());
};

/**
 * @param {string} strs
 * @return {string}
 */
function getSignatureString(str) {
	let letterFreqArr = new Array(26);
	letterFreqArr.fill(0);
	for (let i = 0; i < str.length; i++) {
		const key = str.charCodeAt(i) - "a".charCodeAt(0);
		letterFreqArr[key] = letterFreqArr[key] + 1;
	}
	let signatureString = "";
	for (let i = 0; i < letterFreqArr.length; i++) {
		if (letterFreqArr[i] > 0) {
			for (let j = 0; j < letterFreqArr[i]; j++) {
				signatureString =
					signatureString + String.fromCharCode(i + "a".charCodeAt(0));
			}
		}
	}
	return signatureString;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
