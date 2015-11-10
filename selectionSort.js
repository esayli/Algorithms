
//https://jsfiddle.net/fLo8s9ue/1/
var array = [64, 25, 12, 22, 11];
var time;
function selectionSort(unSortedArray){
    debugger;
    var start = new Date().getMilliseconds();
    
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
    
    var end = new Date().getMilliseconds();
    time = end - start;   
    
     var sortedArray = unSortedArray;
     return sortedArray;
}

alert(selectionSort(array));
alert(time + 'ms');
