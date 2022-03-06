$(function(){
    $("#more").click(function(){
        var next_page = parseInt($(this).attr("current-page")) + 1;

        $.ajax({
            method: "GET",
            url: "/post",
            data: {"page": next_page}
        })
        .done(function(response) {
            for(var post of response) {
                $("#more-posts").append("<div class=\"post-preview\">" +
                    "<a href=\"/post/" + post.id + "\">" +
                    "<h2 class=\"post-title\">" +
                    post.title +
                    "</h2>\n" +
                    "<h3 class=\"post-subtitle\">" +
                    post.content +
                    "</h3></a><p class=\"post-meta\">Posted by " +
                    post.username +
                    "</p></div><hr class=\"my-4\" />");
            }
        });
        $(this).attr("current-page", next_page);
    });

    $("#create_button").click(function(){
        var title = $("#post-title").val();
        var username = $("#post-username").val();
        var content = $("#post-content").val();

        $.ajax({
            method: "POST",
            url: "/post",
            data: JSON.stringify({
                "title": title,
                "username": username,
                "content": content
            }),
            contentType: "application/json"
        })
        .done(function(response) {
            console.log("Post creation success!");
            window.location.href = "/";
        });
    });

    $("#edit_button").click(function(){
        var id = $("#edit-post-id").val();
        var title = $("#edit-post-title").val();
        var content = $("#edit-post-content").val();

        $.ajax({
            method: "PUT",
            url: "/post",
            data: JSON.stringify({
                "id": id,
                "title": title,
                "content": content
            }),
            contentType: "application/json"
        })
        .done(function(response) {
            console.log("Post creation success!");
            window.location.href = "/post/" + id;
        });
    });

    $("#more-comment-button").click(function(){
        var next_page = parseInt($(this).attr("current-comment-page")) + 1;
        var post_id = parseInt($("#post-id").val());

        $.ajax({

        })
        .done(function(response) {

            $(".comment-edit").hide();
        });
        $(this).attr("current-comment-page", next_page);
    });

    $("#comment-save-button").click(function(){
        var username = $("#comment-username").val();
        var content = $("#comment-content").val();
        var post_id = $("#post-id").val();

        $.ajax({

        })
        .done(function(response) {

        });
    });

    $(document).on("click",".comment-edit-button",function(){

        $.ajax({

        })
        .done(function(response) {

        });
    });

    $(document).on("click",".comment-edit-form-button",function(){
        $(this).closest(".comment_text").find(".comment-edit").show();
    });

    $(".comment-edit").hide();

    $(document).on("click",".comment-edit-cancel-button",function(){
        $(this).closest(".comment_text").find(".comment-edit").hide();
    });

    $(document).on("click",".comment-delete-button",function(){
        var id = $(this).parent().parent().children(".comment-id").val();

        console.log("id = " + id);
        $.ajax({

        })
        .done(function(response) {
        });
    });
});