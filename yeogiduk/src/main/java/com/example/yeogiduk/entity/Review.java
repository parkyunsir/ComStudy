package com.example.yeogiduk.entity;
import com.example.yeogiduk.dto.ReviewDto;
import jakarta.persistence.*;
import lombok.*;
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
@Table(name = "Review")
public class Review {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) // DB에서 자동으로 pk 1씩 증가
    private Long viewId; //pk
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
        // 예외 발생
        if (dto.getViewId() != null)
            throw new IllegalArgumentException("댓글 생성 실패! 댓글의 id가 없어야 합니다.");
        if (!(dto.getRstId().equals(rstId)))
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



