var isSubsequence = function(s, t) {
    var mapS = s.length;
    var mapT = t.length;
    
    for(var i = 0; i < mapS; ){
        for(var j = 0; j < mapT; ){
            if(s[i] == t[j]){
                i++
                j++
            }else{
                j++
            }
        }
    }
    return i === mapS
};