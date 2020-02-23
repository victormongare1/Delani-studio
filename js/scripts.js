$(document).ready(function(){
  $(".design-showing").click(function(){
    $(".design-showing").hide();
    $(".design-hidden").show();
  });
  $(".design-hidden").click(function(){
    $(".design-showing").show();
    $(".design-hidden").hide();
  });
  $(".dev-showing").click(function(){
    $(".dev-showing").hide();
    $(".dev-hidden").show();
  });
  $(".dev-hidden").click(function(){
    $(".dev-showing").show();
    $(".dev-hidden").hide();
  });
  $(".product-showing").click(function(){
    $(".product-showing").hide();
    $(".product-hidden").show();
  });
  $(".product-hidden").click(function(){
    $(".product-showing").show();
    $(".product-hidden").hide();
  });
    $("#img1").hover(function () {
    $(this).animate({opacity:'0.5'});
    },
    function () {
    $(this).animate({opacity:'1'});
  })
    $("#img2").hover(function () {
    $(this).animate({opacity:'0.5'});
    },
    function () {
    $(this).animate({opacity:'1'});
  })
    $("#img3").hover(function () {
    $(this).animate({opacity:'0.5'});
    },
    function () {
    $(this).animate({opacity:'1'});
  })
    $("#img4").hover(function () {
    $(this).animate({opacity:'0.5'});
    },
    function () {
    $(this).animate({opacity:'1'});
  })
    $("#img5").hover(function () {
    $(this).animate({opacity:'0.5'});
    },
    function () {
    $(this).animate({opacity:'1'});
  })
    $("#img6").hover(function () {
    $(this).animate({opacity:'0.5'});
    },
    function () {
    $(this).animate({opacity:'1'});
  })
    $("#img7").hover(function () {
    $(this).animate({opacity:'0.5'});
    },
    function () {
    $(this).animate({opacity:'1'});
  })
    $("#img8").hover(function () {
    $(this).animate({opacity:'0.5'});
    },
    function () {
    $(this).animate({opacity:'1'});
  })
  $("#submit").click (function(event) {
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    if(email==="" || name===""){
      alert("please fill in both name and email")
    }
    else{
      alert( name + " we have received your message ,Thank you for reaching out to us.") 
    }
  })
})