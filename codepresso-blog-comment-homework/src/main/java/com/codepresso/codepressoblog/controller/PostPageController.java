package com.codepresso.codepressoblog.controller;

import com.codepresso.codepressoblog.service.CommentService;
import com.codepresso.codepressoblog.service.PostService;
import com.codepresso.codepressoblog.vo.Comment;
import com.codepresso.codepressoblog.vo.Post;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@AllArgsConstructor
@Controller
public class PostPageController {

    private PostService postService;
    private CommentService commentService;

    @RequestMapping("/post/{id}")
    public String getPostDetailPage(Model model, @PathVariable Integer id) {
        Post post = postService.getPostById(id);

        model.addAttribute("post", post);

        return "post_datail";
    }

    @RequestMapping("/post/create")
    public String getPostCreatePage() {
        return "post_write";
    }

    @RequestMapping("/post/edit/{id}")
    public String getPostCreatePage(Model model, @PathVariable Integer id) {
        Post post = postService.getPostById(id);
        model.addAttribute("post", post);
        return "post_edit";
    }
}
