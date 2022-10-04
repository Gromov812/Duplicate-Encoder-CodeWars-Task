function duplicateEncode(n){
    
            let res =[];
            n = n.toLowerCase().split("");
            let obj ={};
  
            for (let el in n) {
                obj[n[el]] = (obj[n[el]] + 1) || 1;
            }
  
            for (let el in n){
                obj[n[el]] < 2 ? res.push("(") : res.push(")");
            }
  
            return res.join("");
}
