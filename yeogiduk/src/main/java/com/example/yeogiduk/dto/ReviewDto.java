package com.example.yeogiduk.dto;
import com.example.yeogiduk.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

import static java.time.LocalTime.now;

@Slf4j
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Builder
public class ReviewDto {
    private Long viewId;
    private Long rstId;
    private String email;
    private String content;
    private Date date;
    private int star;

    public static ReviewDto createReviewDto(Review review) {
        return new ReviewDto(
                review.getViewId(),
                review.getRstId(),
                review.getEmail(),
                review.getContent(),
                review.getDate(),
                review.getStar()
        );
    }

    public Date setNow() {
        return new Date();
    }
}
