package com.socialfeed.server.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    public Long addNewPost(Post post) {
        postRepository.save(post);
        System.out.println("New post: " + post);
        return post.getId();
    }

    public String deletePost(Long id) {
        boolean exists = postRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("post with id " + id + " does not exists");
        }
        postRepository.deleteById(id);
        return ("post was deleted");
    }


//     need to address this and make sure I separate them correctly
    @Transactional
    public void updatePost(Long id,
                           String content
    ) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalStateException(
                "post with id " + id + " does not exist"
        ));
        post.setContent(content);


    }
//    With transactions configured, we can now annotate a bean with @Transactional either at the class or method level:
    @Transactional
    public void updateComments(Long id,
                           ArrayList<Object> comments
    ) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalStateException(
                "post with id " + id + " does not exist"
        ));
        post.setComments(comments);


    }
}
