package com.example.yeogiduk.api;

import com.example.yeogiduk.dto.ReviewDto;
import com.example.yeogiduk.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewApiController {
    @Autowired
    private ReviewService reviewService;

    // 1. 댓글 조회
    @GetMapping("/api/restaurants/{rstId}/reviews")
    public ResponseEntity<List<ReviewDto>> reviews(@PathVariable Long rstId){

        // 서비스에 위임
        List<ReviewDto> dtos = reviewService.reviews(rstId);

        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(dtos);
    }

    // 2. 댓글 생성
    @PostMapping("/api/restaurant/{rstId}/reviews")
    public ResponseEntity<ReviewDto> create(@PathVariable Long rstId,
                                             @RequestBody ReviewDto dto) {
        // 서비스에 위임
        ReviewDto createdDto = reviewService.create(rstId, dto);
        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(createdDto);
    }

}
