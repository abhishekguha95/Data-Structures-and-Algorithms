function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }

    const s1_freq = {}
    for(let i = 0; i < s1.length; i++){
        s1_freq[s1[i]] = s1_freq[s1[i]] ? (s1_freq[s1[i]] + 1) : 1
    }

    const s2_freq = {}
    for(let i = 0; i < s2.length; i++){
        s2_freq[s2[i]] = s2_freq[s2[i]] ? (s2_freq[s2[i]] + 1) : 1
    }

    for(const key of Object.keys(s1_freq)){
        if(!s2_freq[key]){
            return false
        }
        if(s2_freq[key] !== s1_freq[key]){
            return false
        }
    }
    return true   
}


console.log(isAnagram("", ""))