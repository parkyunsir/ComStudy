package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Image;
import lombok.*;
import org.springframework.beans.factory.annotation.Value;

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
        return viewId.toString() + "_" + originFileName;
    }

    public String getPath() {
        // return "C:/SG_2023/yeogiduk/ComStudy";
        return "C:/SoftWare4/YeoGiDuk";
    }
}

// SuA : "C:/SG_2023/yeogiduk/ComStudy"
//YunS: return "C:/SoftWare4";