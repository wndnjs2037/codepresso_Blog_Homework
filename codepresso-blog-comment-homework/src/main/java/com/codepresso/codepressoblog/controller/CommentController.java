package com.codepresso.codepressoblog.controller;

import com.codepresso.codepressoblog.controller.dto.CommentRequestDto;
import com.codepresso.codepressoblog.controller.dto.CommentResponseDto;
import com.codepresso.codepressoblog.service.CommentService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {

    @GetMapping("/comment")
    public List<CommentResponseDto> getCommentListByPost(@RequestParam("post_id") Integer postId, @RequestParam Integer page) {
        return null;
    }

    @PostMapping("/comment")
    public String createComment(@RequestBody CommentRequestDto commentDto) {
        return null;
    }

    @PutMapping("/comment")
    public String updateComment(@RequestBody CommentRequestDto commentDto) {
        return null;
    }

    @DeleteMapping("/comment")
    public String deleteComment(@RequestParam Integer id) {
        return null;
    }
}
