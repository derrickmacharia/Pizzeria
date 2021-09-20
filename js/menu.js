function sizeValue(){
  var size = document.getElementById("size").value;
  // console.log(size)
  return parseInt(size);
};
function crustValue(){
  var crust = document.getElementById("crust").value;
  // console.log(crust)
  return parseInt(crust);
};
function baconValue(){
  var bacontype = 0;
  var bacon = document.getElementById("bacon");
  if(bacon.checked === true){
    baconType = 50
  }
  console.log(baconType)
  return parseInt(baconType)
};
function mushroomValue(){
  var mushroomtype = 0;
  var mushroom = document.getElementById("mushroom");
  if(mushroom.checked === true){
    mushroomType = 50
  }
  console.log(mushroomType)
  return parseInt(mushroomType)
};
function sausageValue(){
  var sausagetype = 0;
  var sausage = document.getElementById("sausage");
  if(sausage.checked === true){
    sausageType = 50
  }
  console.log(sausageType)
  return parseInt(sausageType)
};