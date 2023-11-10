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
    private Date DATE;
    private String content;
    private String rName;
    private int RstId;
    private int star;
    private String Email;
    //private LongBlob image;
    public static ReviewDto createReviewDto(Review review) {
        return new ReviewDto(
                review.getViewId(),
                review.getDATE(),
                review.getContent(),
                review.getRName(),
                review.getRestaurant().getRstId(), // 머지 후 에러 안날듯!
                review.getStar(),
                review.getEmail()
        );
    }
}
