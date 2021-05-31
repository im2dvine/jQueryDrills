// $(document).ready(function () {
//     $('.demo').click(function () {
//         $(this).hide()
//     });
// });


/****************************************************************/

//     $("form").keyup(function() {
//     var value = $(this).val();
//     $("h2").text(value);
// })
// .keyup();

// $("h2").appendTo("div");


//     let $h2 = $('input:text').val().appendTo("body");
//     console.log($(this).text());

// let $h2 = $("<h2></h2>").appendTo("body");
// $("input:text").val().appendTo("h2");

// // return $(form);


// let $inputContent = $('<h2>' + $textInput.val() + '</h2>');


// let inputContent = $('input:text').val();
// $('h2').append('<h2 class="newH2">' + inputContent + '</h2>');

/*attempts ^^ to do #'s 9 and 10*/

/****************************************************************/

/**1st attempt**/

// $(document).ready(function () {

//     $("#btnSubmit").on("click", function () {
//         $("form").submit(function () {
//             alert($("input[type='text']").val());
//         });

//         //  let $text = $("input[type='text']").val();
//         //  let $h2 = $("<h2 class='h2'>" + $text + "</h2>");
//         // $('body').append($h2)
//         // $(".h2").mouseover(function () {
//         //     $(this).css({"background-color": "purple", "border-radius": "10px"})
//         //     console.log("It worked! I changed colors!");
//         // })
//     });

//     // $(':input[type="submit"]') = $("#btnSubmit")....
//     $("#btnSubmit").prop("disabled", true);
//     $("input[type='text']").keyup(function () {
//         if ($(this).val() != '') {
//             $("#btnSubmit").prop("disabled", false);
//         };
//     });

//     // $("body").append("<div id='myDiv'></div>");
//     // $("body").append("<ul id='myList'></ul>");
//     // uList = $(`<li>${txtValue}</li>`);
//     // $("#myList").append(uList);
//     // $("#myDiv").append($("#myList"));


//     // let div = $("<div></div>");
//     // $("body").append(div);
//     // $("form").submit(function (e) {
//     //     e.preventDefault();
//     //     let userInput = $("input[type='text']").val();
//     //     $("div").append(`<h2>${userInput}</h2>`);
//     // });

//     let ul = $("<ul></ul>");
//     $("body").append(ul);

//     $("form").submit(function (e) {
//         e.preventDefault();
//         let userInput = $("input[type='text']").val();
//         $("ul").append(`<li>${userInput}</li>`);
//         $("li").click(function () {
//             let red = Math.floor(Math.random() * 255);
//             let green = Math.floor(Math.random() * 255);
//             let blue = Math.floor(Math.random() * 255);
//             let randomColor = `rgb(${red}, ${green}, ${blue})`;
//             $(this).css("color", randomColor);
//         });
//         $("li").dblclick(function () {
//             $(this).remove();
//         });
//     });

// });

/****************************************************************/

/**2nd attempt**/

$(document).ready(function () {

    $("#btnSubmit").on("click", function () { //when id="btnSubmit" is clicked/submitted run the following..
        $("form").submit(function () { //when form element is submitted..
            alert($("input[type='text']").val()); //alert will pop up with input value..
        });

        /*added h2 and changed background color and border radius when mouse over*/
        // let $text = $("input[type='text']").val();
        // let $h2 = $("<h2 class='h2'>" + $text + "</h2>");
        // $("body").append($h2)
        // $(".h2").mouseover(function () {
        //     $(this).css({ "background-color": "purple", "border-radius": "10px" })
        //     console.log("It worked! I changed colors!");
        // })
    });

    $("#btnSubmit").prop("disabled", true); //input with id="btnSubmit" button disabled..
    $("input[type='text']").keyup(function () { //.keyup() = when any key in the keyboard is pressed...
        if ($(this).val() != '') { // if value not empty then...
            $("#btnSubmit").prop("disabled", false); // input with id="btnSubmit" button would not be disabled which means enabled!..
        };
    });

    let ul = $("<ul></ul>"); // creates unordered list
    $("body").append(ul); // appends ul to body

    $("form").submit(function (e) { // e = event //another when form is submitted function but this time with event..
        e.preventDefault(); //prevents the submit button from "fully being submitted"..default action for event will not occur..
        let userInput = $("input[type='text']").val();
        $("ul").append(`<li>${userInput}</li>`); //creates list item which contains userInput value and appends it to unordered list..
        $("li").click(function () { //when list item/element is clicked colors will change randomly..
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let randomColor = `rgb(${red}, ${green}, ${blue})`; //random color
            $(this).css("color", randomColor);
        });
        $("li").dblclick(function () { //when list item/element double clicked will be removed..
            $(this).remove();
        });
    });
});
