package com.example.yeogiduk.entity;

import com.example.yeogiduk.dto.ReviewDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Entity
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) // DB에서 자동으로 pk 1씩 증가
    private int viewId; //pk

    @ManyToOne // Comment 엔티티와 Article 엔티티를 다대일 관계로 설정
    @JoinColumn(name="RstId") // Restaurant의 id를 외래키로 생성하여 조인시킴
    private Restaurant restaurant; // 리뷰의 상세 페이지 = article
    @Column
    private String Email; // 리뷰를 단 학생의 이메일
    @Column
    private String content; // 리뷰의 본문 내용
    @Column
    private Date DATE;
    @Column
    private String rName;
    @Column
    private int star;

    public static Review createReview(ReviewDto dto, Restaurant restaurant) {
        // 예외 발생
        /* getId()오류남... , getRstId() 머지 후 에러 삭제
        if (dto.getId() != null)
            throw new IllegalArgumentException("댓글 생성 실패! 댓글의 id가 없어야 합니다.");
        if (dto.getRstId() != restaurant.getRstId())
            throw new IllegalArgumentException("댓글 생성 실패! 게시글의 id가 잘못됐습니다.");*/
        // 엔티티 생성 및 반환
        return new Review(
                dto.getViewId(),
                restaurant,
                dto.getEmail(),
                dto.getContent(),
                dto.getDATE(),
                dto.getRName(),
                dto.getStar()
        );

    }
}