const calculate = function(s) {
  const isDigit = ch => ch >= "0" && ch <= "9";
  let ans = 0,  sign = 1,  n = s.length;
  const stk = [];
  for (let i = 0; i < n; i += 1) {
    const ch = s[i];
    if (isDigit(ch)) {
      let num = 0;
      while (i < n && isDigit(s[i])) {
        num = num * 10 + (s[i] - "0");
        i += 1;
      }
      ans += sign * num; 
      i -= 1;           
    } else if (ch == "+") {
      sign = 1;
    } else if (ch == "-") {
      sign = -1;
    } else if (ch == "(") {
      stk.push(ans);    
      stk.push(sign);      
      ans = 0;         
      sign = 1;            
    } else if (ch == ")") { 
      ans *= stk.pop();     
      ans += stk.pop();     
    }
  }
  return ans;
};
