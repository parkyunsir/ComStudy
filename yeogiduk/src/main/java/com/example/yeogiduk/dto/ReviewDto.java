package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import static java.time.LocalTime.now;

@Slf4j
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class ReviewDto {
    private int viewId;
    private Long rstId;
    private String email;
    private String content;
    private Date date;
    private int star;
    //private LongBlob image;
    public static ReviewDto createReviewDto(Review review) {
        return new ReviewDto(
                review.getViewId(),
                review.getRstId(),
                review.getEmail(),
                review.getContent(), // 머지 후 에러 안날듯!
                review.getDate(),
                review.getStar()
        );
    }

    public Date setNow() {
        Date now = new Date();
        return now;
    }
}
