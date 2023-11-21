package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Image;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ImageDto {
    private Long id;
    private String originFileName;
    private String fullPath;

    public static Image toEntity() {
        return Image .builder()
                .id(this.id)
                .originFileName(this.originFileName)
                .fullPath(this.fullPath)
                .build();
    }

    @Builder
    public ImageDto(Long id, String originFileName, String fullPath) {
        this.id = id;
        this.originFileName = originFileName;
        this.fullPath = fullPath;
    }
}
