package com.example.yeogiduk.entity;

import com.example.yeogiduk.dto.RtypeDto;
import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Rtype")
public class Rtype {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long typeId;
    @Column
    private String title;

    public static Rtype createRtype(RtypeDto rDto) {
        if(rDto.getTypeId() != null)
           throw new IllegalArgumentException("생성 실패! id가 없어야 합니다.");
        return new Rtype(
                rDto.getTypeId(),
                rDto.getTitle()
        );
    }
}
