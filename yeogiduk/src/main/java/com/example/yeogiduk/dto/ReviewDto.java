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
public class ReviewDto {
    private int viewId;
    private Long rstId;
    private String email;
    private String content;
    private Date date;
    private int star;
    //private String Email;
    //private Long id;
    //private String originFileName;
    //private String fullPath;
/*
    public File toEntity() {
        return File.builder()
                .id(this.id)
                .originFileName(this.originFileName)
                .fullPath(this.fullPath)
                .build();
    }
    @Builder
    public void ImageDto(Long id, String originFileName, String fullPath) {
        this.id = id;
        this.originFileName = originFileName;
        this.fullPath = fullPath;
    }

 */
    public static ReviewDto createReviewDto(Review review) {
        return new ReviewDto(
                review.getViewId(),
                review.getRstId(),
                review.getEmail(),
                review.getContent(),
                review.getDate(),
                //review.getRestaurant().getRstId(), // 머지 후 에러 안날듯!
                review.getStar()
                //review.getEmail(),
                //review.getId(),
                //review.getOriginFileName(),
                //review.getFullPath()

        );
    }
    public Date setNow() {
        Date now = new Date();
        return now;
    }
}
