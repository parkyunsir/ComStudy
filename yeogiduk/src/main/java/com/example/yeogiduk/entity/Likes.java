package com.example.yeogiduk.entity;

import com.example.yeogiduk.dto.LikesDto;
import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.dto.RtypeDto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private Long rstId;

    public static Likes createLikes(LikesDto dto) {
        if(dto.getId() != null)
            throw new IllegalArgumentException("생성 실패! id가 없어야 합니다.");
        return new Likes(
                dto.getId(),
                dto.getEmail(),
                dto.getRstId()
        );
    }
}
