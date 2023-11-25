package com.example.yeogiduk.api;

import com.example.yeogiduk.dto.ReviewDto;
import com.example.yeogiduk.entity.Review;
import com.example.yeogiduk.service.ReviewService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewApiController {
    @Autowired
    private ReviewService reviewService;

    // 1. 댓글 조회
    @GetMapping("/restaurant/{rstId}/reviews")
    public ResponseEntity<List<ReviewDto>> reviews(@PathVariable Long rstId){

        // 서비스에 위임
        List<ReviewDto> reviews = reviewService.reviews(rstId);

        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(reviews);
    }

    @PostMapping("/restaurant/{rstId}/reviews")
    public ResponseEntity<ReviewDto> create(@PathVariable Long rstId,
                                            @RequestBody ReviewDto dto, List<MultipartFile> files) throws IOException {
        // 서비스에 위임
        ReviewDto created = reviewService.create(rstId, dto, files);
        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(created);
    }

/*
    // 2. 댓글 생성
    @PostMapping("/restaurant/{rstId}/reviews")
    public ResponseEntity<ReviewDto> create(@PathVariable Long rstId,
                                             @RequestBody ReviewDto dto) {
        // 서비스에 위임
        ReviewDto created = reviewService.create(rstId, dto);
        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(created);
    }*/

    // 내가 쓴 리뷰
    @GetMapping("/reviews/{email}")
    public ResponseEntity<List<Review>> myReviews(@PathVariable String email) {
        List<Review> reviews = reviewService.myReviews(email);
        return ResponseEntity.status(HttpStatus.OK).body(reviews);
    }
}
