let sortTheColors = (colors) => {
     if(colors.length <= 1) return colors;

     let st = 0;
     let end = colors.length-1;
     let i = 0;// fast pointer
     while(i<end){
          if(colors[st]==0){
               let temp = colors[i];
               colors[i] = colors[st];
               colors[st] = temp;
               st++;
               i++;
          }else if(colors[i]==1){
               i++;
          }else{
               let temp = colors[i];
               colors[i] = colors[end];
               colors[end] = temp;
               end--;
          }
     }
     return colors;
}
console.log(sortTheColors([2,0,2,1,1,0]))