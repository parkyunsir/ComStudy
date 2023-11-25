package com.example.yeogiduk.entity;

import com.example.yeogiduk.dto.ImageDto;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;
    @Column
    private Long viewId;
    @Column(nullable = false)
    private String originFileName;
    @Column(nullable = false)
    private String savedFileName;

    public static Image createImage(ImageDto dto) {
        if(dto.getImageId() != null)
            throw new IllegalArgumentException("생성 실패! id가 없어야 합니다.");
        return new Image(
                dto.getImageId(),
                dto.getViewId(),
                dto.getOriginFileName(),
                dto.setSavedFileName()
        );
    }
}
