var main = function () {
    "use strict";
// we define the strict property to require proper variable / field naming
    var addCommentFromInputBox = function () {
        var $new_comment;
// define a varible and assign the value from out text box
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };
// process the content of that text box --^
    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });
// even handler for on click event
    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};
// check for specific key code
$(document).ready(main); // give it a go
