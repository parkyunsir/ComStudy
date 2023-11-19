package com.example.yeogiduk.entity;

import com.example.yeogiduk.dto.ReviewDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.time.DateTimeException;
import java.time.LocalTime;
import java.util.Date;

import static java.time.LocalTime.now;

@Slf4j
@Entity
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) // DB에서 자동으로 pk 1씩 증가
    private int viewId; //pk
    @Column
    private Long rstId; // 리뷰의 상세 페이지 = article
    @Column
    private String email; // 리뷰를 단 학생의 이메일
    @Column
    private String content; // 리뷰의 본문 내용
    @Column
    private Date date;
    @Column
    private int star;

    public static Review createReview(ReviewDto dto, Long rstId) {
        if (dto.getViewId() != 0)
            throw new IllegalArgumentException("댓글 생성 실패! 댓글의 id가 없어야 합니다.");
        if (dto.getRstId() != rstId)
            throw new IllegalArgumentException("댓글 생성 실패! 게시글의 id가 잘못됐습니다.");
        if (dto.getDate() != null)
            throw new IllegalArgumentException("댓글 생성 실패! 날짜는 현재 날짜이므로 date는 없어야 합니다.");
        // 엔티티 생성 및 반환
        return new Review(
                dto.getViewId(),
                dto.getRstId(),
                dto.getEmail(),
                dto.getContent(),
                dto.setNow(),
                dto.getStar()
        );

    }
}