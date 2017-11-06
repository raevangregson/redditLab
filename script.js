$(document).ready(function(){
$.get("https://www.reddit.com/r/aww/.json", function(data){
  var dataChildren = data.data.children
  var title;
  var image;
  var url;

  for(i=1;i<dataChildren.length;i++){

    title = dataChildren[i].data.title;
    image = dataChildren[i].data.preview.images[0].source.url;
    url = dataChildren[i].data.url

  $("body").append("<div class='post'><a class='link' href='"
  +url+"' ><div class='title'>"
  +title+"</div></a><div class='imageContainer'><a class='link' href='"
  +url+"' ><img class='image' src="
  +image+"></a></div><p>"
  +i+"</p></div>");
};

 $("body").append("<button class='button' >show more</button>")

 var elements = document.getElementsByClassName("post");
 for(i=10;i<elements.length;i++){
   $(elements[i]).hide();
 };

 $(".button").on("click",function(){
   if ($("button").text()=== "show more"){
     for(i=10;i<elements.length;i++){
       $(elements[i]).show();
       $("button").text("show less");
   }
 }
   else{
     for(i=elements.length;i>9;i--){
       $(elements[i]).hide();
       $("button").text("show more");
   }
 };
 });




});

});
