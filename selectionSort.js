//https://jsfiddle.net/fLo8s9ue/

var array = [64, 25, 12, 22, 11];

function selectionSort(unSortedArray){
    
    for(var i = 0 ; i < unSortedArray.length; i++ ){
        
        var currentMin = unSortedArray[i];
        var newMinIndex = i;
        
        for(var z = i; z < unSortedArray.length ; z++ ){
        
            if(unSortedArray[z] < currentMin){
            	currentMin = unSortedArray[z];
                newMinIndex = z;
            }            
        }
        
        if(unSortedArray[i] != currentMin){
        	unSortedArray[newMinIndex] = unSortedArray[i]
        	unSortedArray[i] = currentMin;        
        }               
        
       
    }        
    
     var sortedArray = unSortedArray;
     return sortedArray;
}

alert(selectionSort(array));