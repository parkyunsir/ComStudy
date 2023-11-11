package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Likes;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LikesDto {
    private Long id;
    private String email;
    private Long rstId;

    public Likes toEntity() {
        return new Likes(id, email, rstId);
    }
}
