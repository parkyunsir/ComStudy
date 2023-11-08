package com.example.yeogiduk.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) // DB에서 자동으로 pk 1씩 증가
    private Long id; //pk

    @ManyToOne // Comment 엔티티와 Article 엔티티를 다대일 관계로 설정
    @JoinColumn(name="RstId") // Restaurant의 id를 외래키로 생성하여 조인시킴
    //private Article article; // 리뷰의 상세 페이지 = article

    @Column // 속성설정
    private String sEmail; // 리뷰를 단 학생의 이메일

    @Column // 속성설정
    private String body; // 리뷰의 본문 내용

}