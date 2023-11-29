package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.ImageDto;
import com.example.yeogiduk.dto.ReviewDto;
import com.example.yeogiduk.entity.Image;
import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Review;
import com.example.yeogiduk.repository.ImageRepository;
import com.example.yeogiduk.repository.RestaurantRepository;
import com.example.yeogiduk.repository.ReviewRepository;
import jakarta.persistence.metamodel.SingularAttribute;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private ImageRepository imageRepository;

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
    public ReviewDto create(Long rstId, ReviewDto dto, List<MultipartFile> images) throws IOException {
        if(!rstId.equals(dto.getRstId())) {
            return null;
        }
        Restaurant restaurant = restaurantRepository.findByRstId(rstId);
        if (restaurant == null) {
            throw new IllegalArgumentException("댓글 생성 실패! 대상 게시글이 없습니다.");
        }
        Review review = Review.createReview(dto, rstId);
        Review reviewed = reviewRepository.save(review);
        if(images != null) {
            for(MultipartFile file : images) {
                ImageDto imageDto = ImageDto.builder()
                        .viewId(reviewed.getViewId())
                        .originFileName(file.getOriginalFilename())
                        .build();
                Image image = Image.createImage(imageDto);
                Image saved = imageRepository.save(image);
                file.transferTo(new File(imageDto.getPath() + "/yeogiduk/src/main/resources/static/images_review/" + saved.getSavedFileName()));
            } // "/yeogiduk-frontend/public/images_review/"
        }
        return ReviewDto.createReviewDto(reviewed);
    }

    @Transactional
    public ReviewDto create(Long rstId, ReviewDto dto) {
        if(!rstId.equals(dto.getRstId())) {
            return null;
        }
        Restaurant restaurant = restaurantRepository.findByRstId(rstId);
        if (restaurant == null) {
            throw new IllegalArgumentException("댓글 생성 실패! 대상 게시글이 없습니다.");
        }
        Review review = Review.createReview(dto, rstId);
        Review reviewed = reviewRepository.save(review);
        return ReviewDto.createReviewDto(reviewed);
    }

    /*
    @Transactional
    public ReviewDto create(Long rstId, ReviewDto dto) {

        // 1. 게시글 조회 및 예외 발생
        if(!rstId.equals(dto.getRstId())) {
            return null;
        }

        Restaurant restaurant = restaurantRepository.findByRstId(rstId);
        if (restaurant == null) {
            throw new IllegalArgumentException("댓글 생성 실패! 대상 게시글이 없습니다.");
        }
        // 2. 댓글 엔티티 생성
        Review review = Review.createReview(dto, rstId);
        // 3. 댓글 엔티티를 DB에 저장
        Review reviewed = reviewRepository.save(review);
        // 4. DTO로 변환해 반환
        return ReviewDto.createReviewDto(reviewed);
    }*/

    public List<Review> myReviews(String email) {
        return reviewRepository.findByEmail(email);
    }

/*
    @Transactional
    public SingularAttribute<? super Object, Object> save(ReviewDto reviewDto) {
        return ReviewRepository.save(reviewDto.toEntity()).getId(); // 일단 저장 기능만 구현함
    }
*/
}
