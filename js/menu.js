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
  // console.log(baconType)
  return parseInt(baconType)
};
function mushroomValue(){
  var mushroomType = 0;
  var mushroom = document.getElementById("mushroom");
  if(mushroom.checked === true){
    mushroomType = 50
  }
  // console.log(mushroomType)
  return parseInt(mushroomType)
};
function sausageValue(){
  var sausageType = 0;
  var sausage = document.getElementById("sausage");
  if(sausage.checked === true){
    sausageType = 50
  };
  // console.log(sausageType)
  return parseInt(sausageType)
};
function amountNumber(){
  var number = document.getElementById("amount").value;
  return parseInt(number)
};
function calculation(){
  var total = (sizeValue()+crustValue()+baconValue()+mushroomValue()+sausageValue())*amountNumber();
  document.getElementById("display").innerHTML = "Hi your total value is" + total
};

$(document).ready(function(){
  $(".delivery").click(function(){
    $(".formsection").show();
    $(".delivery").hide();
  });
});

$(document).ready(function(){
  $("#delivery-form").submit(function(event){
    event.preventDefault();
    var name = $("#name-input").val();
    var number = $("#number-input").val();
    var location = $("#location-input").val();
    
    if ($("#name-input").val() && $("#location-input").val()) {
        alert(name + " We have received your order!.It will be delivered in the next 20 minutes!");
    } else {
        alert("Please enter valid name");
    }
  });
});

$(document).ready(function(){
  $(".gtotal").click(function(){
    $(".dmessage").show();
    $("#delivery-form").hide();
  });
});