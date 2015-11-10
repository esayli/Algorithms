var arr  = [45,44,34,16,9,12,3334,234,1765,3452123,1452];

for(var i = 0; i < arr.length; i++){
    
    for(var z = i+1 ; z >= 0 ; z--){
        
       if( z >= 0 && arr[z]< arr[z-1]){
           var temp = arr[z];
           arr[z] = arr[z-1];
           arr[z-1] = temp;       
       }
        
    }    
}
console.log(arr);
     
