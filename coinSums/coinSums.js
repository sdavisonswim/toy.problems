// Given a given number of pence, return the possible number of ways someone could make change.

var coins = [1,2,5,10,20,50,100,200];

function coinSums (total) {
  var count = 0;

  for(var i = 0; i <= total/200; i++){
  	for(var j = 0; j <= total/100; j++){
  		for(var k = 0; k <= total/50; k++){
  			for(var g = 0; g <= total/20; g++){
  				for(var h = 0; h <= total/10; h++){
  					for(var a = 0; a <= total/5; a++){
  						for(var b = 0; b <= total/2; b++){
  							for(var c = 0; c <= total/1; c++){
  								var sum = i*200 + j*100 + k*50 + g*20 + h*10 + a*5 + b*2 + c;
  								if(sum === total){
  									count++;
  								}
  							}
  						}
  					}
  				}
  			}
  		}
  	}
  }
  return count;
}