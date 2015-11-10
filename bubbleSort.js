var arr  = [45,44,34,16,9,12,3334,234,1765,3452123,1452];

function bubbleShort(unsortedArray){
    var flag = 0;
    for(var i = 0 ; i <unsortedArray.length; i++){
        
        if(unsortedArray[i]>unsortedArray[i+1]){
            var temp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[i+1];
            unsortedArray[i+1] = temp;        
            flag ++;
        }
    }
    if(flag != 0){
        bubbleShort(unsortedArray)
    
    }else{
    	alert(unsortedArray);
    
    }    
}

bubbleShort(arr);


//https://jsfiddle.net/xgfaec4r/
