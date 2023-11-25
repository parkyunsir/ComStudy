package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Image;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ImageDto {
    private Long imageId;
    private Long viewId;
    private String originFileName;
    private String savedFileName;

    public Image toEntity() {
        return new Image(imageId, viewId, originFileName, savedFileName);
    }

    public String setSavedFileName() {
        return "C:/SG_2023/images" + viewId.toString() + "_" + imageId.toString() + ".jpg";
    }
}
