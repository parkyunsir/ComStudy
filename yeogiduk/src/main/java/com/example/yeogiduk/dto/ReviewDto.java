package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Image;
import com.example.yeogiduk.entity.Review;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class ReviewDto {
    private int viewId;
    private Date DATE;
    private String content;
    private long rstId;
    private int star;
    private String Email;

    private Long id;
    private String originFileName;
    private String fullPath;

    public Image toEntity() {
        return Image.builder()
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
    public static ReviewDto createReviewDto(Review review) {
        return new ReviewDto(
                review.getViewId(),
                review.getDATE(),
                review.getContent(),
                review.getRestaurant().getRstId(), // 머지 후 에러 안날듯!
                review.getStar(),
                review.getEmail(),
                review.getId(),
                review.getOriginFileName(),
                review.getFullPath()

        );
    }

}
