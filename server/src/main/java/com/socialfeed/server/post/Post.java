package com.socialfeed.server.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table

public class Post {
    @Id
    @SequenceGenerator(name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 1
    )
    // for
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "post_sequence"
    )
    private Long id;
    private String content;
    private String name;
    private String email;
    private String dateTime;
    private FeelingEnum feeling;
    private Boolean isPrivate;
    public ArrayList<Object> comments;

}




