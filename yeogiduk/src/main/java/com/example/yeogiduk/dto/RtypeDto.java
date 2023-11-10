package com.example.yeogiduk.dto;
import com.example.yeogiduk.entity.Rtype;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RtypeDto {
    private Long typeId;
    private String title;

    public Rtype toEntity() {
        return new Rtype(typeId, title);
    }
}
