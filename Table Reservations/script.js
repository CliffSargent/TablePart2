"use strict"

$(document).ready(function(){ 
  let circle = null;
  let name = null;
  let phonenumber = null;
  let partysize = null;

  $(document).on("click", ".circle", (event) => {
    circle = $(event.target);
    circle.css("background-color", "#ADAAAA");
  });

  $(document).on("click", ".save", function (event) {
    circle 
      .attr("name", $("input").eq(0).val())
      .attr("phonenumber", $("input").eq(1).val())
      .attr("partysize", $("input").eq(1).val());
    $("input").each(function() {
      $(this).val("");
    });
  });

  $(document).on("mouseenter", ".circle", (event) => {
    if ($(event.target).attr("name") && $(event.target).attr("phonenumber") && $(event.target).attr("partysize")) {
      $(event.target).append(`
      <section class="tooltip">
        Name: ${$(event.target).attr("name")}
        Phone Number: ${$(event.target).attr("phonenumber")}
        Party Size: ${$(event.target).attr("partysize")}
      </section>
      `);
    }
  });

  $(document).on("mouseleave", ".circle", (event) => {
    $(".tooltip").remove();
  });

    $('.reservation').hide();
    $(".middle").click(function() { 
      $(".reservation").fadeIn("slow");
    });
  
  
    $("#x").on("click", function(){
      $("#form").fadeOut("slow");
    })
  
  
  });


  

//check lms for jquery stuff. 
//change class names and what data you're appending. 

// document.addEventListener("click", function(e) {
//     if (e.target.tagName === "DIV") {
//         console.log("yay");
//     }
// });

//   $(document).ready(function() {
//     let selectedTable = null;
//     $(document).on("click", ".available", function(e){
//         $("form").fadeIn(2000);
//         selectedTable = e.target;
//     });

//     $(document).on("click", "button", function(e){
//     $(selectedTable).removeClass("avalabile").addClass("reserved");
//     });
//   })