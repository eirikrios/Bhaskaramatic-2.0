function respond(){
   var a=parseFloat(document.getElementById("a").value);
   var b=parseFloat(document.getElementById("b").value);
   var c=parseFloat(document.getElementById("c").value);
   var igual=parseFloat(document.getElementById("igual").value);

   if(isNaN(igual)){
      var igual = 0;
   }
   if(isNaN(a)){
      var answer = ('Δ = b² - 4.a.c' + '\n' + '\n' + 'x = (-b ± √Δ)/2.a');
   }
   if(isNaN(b)){
      var b = 0;
   }
   if(isNaN(c)){
      var c = 0;
   }

   var c = eval(c - igual);
   var delt = eval(b*b-4*a*c);
   
   var sqrt = Math.sqrt(delt);
   var sqrt = curta(sqrt);
   var xum = eval(((-1*b)+sqrt)/(2*a));
   var xum = curta(xum);
   var xdo = eval(((-1*b)-sqrt)/(2*a));
   var xdo = curta(xdo);

   if(isNaN(delt)){
      var answer = ('Δ = b² - 4 . a . c' + '\n' + '\n' + 'x = -b ± √Δ / 2 . a');
   }
   
   else{
      var answer = ('Δ = b² - 4 . a . c' + '\n' + 'Δ = '+(b*b)+' - 4 . '+a+' . '+c + '\n' + 'Δ = ' + delt + '\n' + '\n');

      if(delt < 0 || a == 0){
         var answer = (answer + 'x = ∄');

      }
      else{
      var answer = (answer + 'x1 = -b + √Δ / 2 . a' + '\n' + 'x1 = '+ (-1*b) + ' + ' + sqrt + ' ' + '/ ' + 2*a + '\n');
      var answer = (answer + 'x1 = ' + xum + '\n' + '\n');
      var answer = (answer + 'x2 = -b - √Δ / 2 . a' + '\n' + 'x2 = '+ (-1*b) + ' - ' + sqrt + ' ' + '/ ' + 2*a + '\n');
      var answer = (answer + 'x2 = ' + xdo);
      }
   }
   document.resp.lousa.value = answer;
   
   function curta(a){
      var a = a * 1000;
      var a = parseInt(a);
      return a / 1000;
   }
   
}
function aumenta(){
   var a = document.getElementById('a').value;
   if(a >= 1000){
      document.inform.a.style.width = '60'
   }
   var b = document.getElementById('b').value;
   if(b >= 1000){
      document.inform.b.style.width = '60'
   }
   var c = document.getElementById('c').value;
   if(c >= 1000){
      document.inform.c.style.width = '60'
   }
   var igual = document.getElementById('igual').value;
   if(igual >= 1000){
      document.inform.igual.style.width = '60'
   }
}

