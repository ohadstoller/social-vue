package com.socialfeed.server.post;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class PostConfig {

    @Bean
    CommandLineRunner commandLineRunner(PostRepository repository) {
        return args -> {
//            Post examplePost = new Post(1L,
//                    "abcdefg",
//                    "Ohad Stoller",
//                    "ohadstoller@gmail.com",
//                    LocalDateTime.now(),
//                    FeelingEnum.HAPPY,
//                    Boolean.FALSE);
//
//            Post examplePost2 = new Post(2L,
//                    "hello 2",
//                    "Dani Mark",
//                    "danimark@gmail.com",
//                    LocalDateTime.now(),
//                    FeelingEnum.SAD,
//                    Boolean.TRUE);
//
//
//            repository.saveAll(
//                    List.of(examplePost)
//            );


        };
    }


}
