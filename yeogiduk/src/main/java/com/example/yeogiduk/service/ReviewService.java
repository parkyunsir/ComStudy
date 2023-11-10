package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.ReviewDto;
import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Review;
import com.example.yeogiduk.repository.RestaurantRepository;
import com.example.yeogiduk.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<ReviewDto> reviews(Long rstId) {
        // 1. 댓글 조회
        List<Review> reviews = reviewRepository.findByRstId(rstId);
        // 2. 엔티티 -> DTO 변환
        List<ReviewDto> dtos = new ArrayList<ReviewDto>();
        for(int i=0; i< reviews.size(); i++){
            Review r = reviews.get(i);
            ReviewDto dto = ReviewDto.createReviewDto(r);
            dtos.add(dto);
        }
        // 3. 결과 반환
        return dtos;

    }
    @Transactional
    public ReviewDto create(Long rstId, ReviewDto dto) {
        // 1. 게시글 조회 및 예외 발생
        Restaurant restaurant = restaurantRepository.findByRstId(rstId) // 머지 후 에러 안날듯
                .orElseThrow(() -> new IllegalArgumentException("댓글 생성 실패! 대상 게시글이 없습니다."));
        // 2. 댓글 엔티티 생성
        Review review = Review.createReview(dto, restaurant);
        // 3. 댓글 엔티티를 DB에 저장
        Review reviewed = reviewRepository.save(review);
        // 4. DTO로 변환해 반환
        return ReviewDto.createReviewDto(reviewed);
    }

}g
