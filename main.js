
// I AM AWARE THAT THIS CODE IS NOT 'DRY' AT ALL. I ATTEMPTED TO COMPRESS IT 
// BUT WAS NOT ABLE TO WITHOUT LOSING SOME OF THE FUNCTIONALITY.


var fruitButton = document.getElementById('fruitButton');
fruitButton.addEventListener('click', hideMeatGrains);
function hideMeatGrains () {
  // (document.querySelectorAll('#apples, #bananas, #strawberries, #mangos, #blueberries, #nectarines')).style.display = 'inline-block';
  document.getElementById('apples').style.display = 'inline-block';
  document.getElementById('bananas').style.display = 'inline-block';
  document.getElementById('strawberries').style.display = 'inline-block';
  document.getElementById('mangos').style.display = 'inline-block';
  document.getElementById('blueberries').style.display = 'inline-block';
  document.getElementById('nectarines').style.display = 'inline-block';
  document.getElementById('appleCart').style.visibility = 'visible';
  document.getElementById('bananasCart').style.visibility = 'visible';
  document.getElementById('strawberriesCart').style.visibility = 'visible';
  document.getElementById('mangosCart').style.visibility = 'visible';
  document.getElementById('blueberriesCart').style.visibility = 'visible';
  document.getElementById('nectarinesCart').style.visibility = 'visible';
  document.getElementById('porkchops').style.display = 'none';
  document.getElementById('sausage').style.display = 'none';
  document.getElementById('groundturkey').style.display = 'none';
  document.getElementById('chickenbreast').style.display = 'none';
  document.getElementById('steak').style.display = 'none';
  document.getElementById('groundbeef').style.display = 'none';
  document.getElementById('quinoa').style.display = 'none';
  document.getElementById('farro').style.display = 'none';
  document.getElementById('brownrice').style.display = 'none';
  document.getElementById('corn').style.display = 'none';
  document.getElementById('oats').style.display = 'none';
  document.getElementById('barley').style.display = 'none';
}

var meatButton = document.getElementById('meatButton');
meatButton.addEventListener('click', hideFruitGrains);
function hideFruitGrains () {
  document.getElementById('porkchops').style.display = 'inline-block';
  document.getElementById('sausage').style.display = 'inline-block';
  document.getElementById('groundturkey').style.display = 'inline-block';
  document.getElementById('chickenbreast').style.display = 'inline-block';
  document.getElementById('steak').style.display = 'inline-block';
  document.getElementById('groundbeef').style.display = 'inline-block';
  document.getElementById('porkchopsCart').style.visibility = 'visible';
  document.getElementById('sausageCart').style.visibility = 'visible';
  document.getElementById('groundturkeyCart').style.visibility = 'visible';
  document.getElementById('chickenbreastCart').style.visibility = 'visible';
  document.getElementById('steakCart').style.visibility = 'visible';
  document.getElementById('groundbeefCart').style.visibility = 'visible';
  document.getElementById('apples').style.display = 'none';
  document.getElementById('bananas').style.display = 'none';
  document.getElementById('strawberries').style.display = 'none';
  document.getElementById('mangos').style.display = 'none';
  document.getElementById('blueberries').style.display = 'none';
  document.getElementById('nectarines').style.display = 'none';
  document.getElementById('quinoa').style.display = 'none';
  document.getElementById('farro').style.display = 'none';
  document.getElementById('brownrice').style.display = 'none';
  document.getElementById('corn').style.display = 'none';
  document.getElementById('oats').style.display = 'none';
  document.getElementById('barley').style.display = 'none';
}

var grainsButton = document.getElementById('grainsButton');
grainsButton.addEventListener('click', hideFruitMeat);
function hideFruitMeat () {
  document.getElementById('porkchops').style.display = 'none';
  document.getElementById('sausage').style.display = 'none';
  document.getElementById('groundturkey').style.display = 'none';
  document.getElementById('chickenbreast').style.display = 'none';
  document.getElementById('steak').style.display = 'none';
  document.getElementById('groundbeef').style.display = 'none';
  document.getElementById('apples').style.display = 'none';
  document.getElementById('bananas').style.display = 'none';
  document.getElementById('strawberries').style.display = 'none';
  document.getElementById('mangos').style.display = 'none';
  document.getElementById('blueberries').style.display = 'none';
  document.getElementById('nectarines').style.display = 'none';
  document.getElementById('quinoa').style.display = 'inline-block';
  document.getElementById('farro').style.display = 'inline-block';
  document.getElementById('brownrice').style.display = 'inline-block';
  document.getElementById('corn').style.display = 'inline-block';
  document.getElementById('oats').style.display = 'inline-block';
  document.getElementById('barley').style.display = 'inline-block';
  document.getElementById('quinoaCart').style.visibility = 'visible';
  document.getElementById('farroCart').style.visibility = 'visible';
  document.getElementById('brownriceCart').style.visibility = 'visible';
  document.getElementById('cornCart').style.visibility = 'visible';
  document.getElementById('oatsCart').style.visibility = 'visible';
  document.getElementById('barleyCart').style.visibility = 'visible';
}

// var fruitButton = document.getElementById('fruitButton');
// fruitButton.addEventListener('click', hideMeatGrains);
// function hideMeatGrains () {
// 	var x = document.getElementById('apples');
//   	if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }


// var grainsButton = document.getElementById('grainsButton');
// grainsButton.addEventListener('click', hideFruitMeat);
// function hideFruitMeat ()

// var fruitClick = document.getElementsById('apples');
// fruitClick.addEventListener('click', hideListItems);
// function hideListItems (){
//   document.getElementById('appleCart').style.display = 'inline-block';
//   document.getElementById('bananasCart').style.display = 'none';
// }

// document.getElementById('logoButton').onclick = function(event) {
//    document.getElementById('logo').className = "show";
// }

// document.querySelectorAll("#myCircle1, #myCircle2")

















