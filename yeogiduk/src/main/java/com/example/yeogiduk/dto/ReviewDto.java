package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class ReviewDto {
    private int viewId;
    private Long rstId;
    private String email;
    private String content;
    private Date DATE;
    private int star;
    //private LongBlob image;
    public static ReviewDto createReviewDto(Review review) {
        return new ReviewDto(
                review.getViewId(),
                review.getRstId(),
                review.getEmail(),
                review.getContent(), // 머지 후 에러 안날듯!
                review.getDATE(),
                review.getStar()
        );
    }
}
