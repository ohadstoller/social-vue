package com.socialfeed.server.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/posts")

public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }


    @CrossOrigin
    @GetMapping
    public List<Post> getPosts() {
        return postService.getPosts();

    }
    @CrossOrigin
    @PostMapping
    public ResponseEntity<?> registerNewPost(@RequestBody Post post) {
        long res = postService.addNewPost(post);
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }
    @CrossOrigin
    @DeleteMapping(path = "{postId}")
    public ResponseEntity<?> deletePost(@PathVariable("postId") Long id) {

        String res = postService.deletePost(id);
        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);

    }

    @CrossOrigin
    @PutMapping(path = "{postId}")
    public void
    updatePost(
            @PathVariable("postId") Long id,
            @RequestParam(required = false) String content) {
        postService.updatePost(id, content);
    }

    @PutMapping()
    public void
    updateComments(
            @RequestBody(required = false) ArrayList<Object> comments, Long id) {
        postService.updateComments(id, comments);
    }


}
