package com.example.yeogiduk.dto;
import com.example.yeogiduk.entity.Rtype;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RtypeDto {
    private String title;

    @Builder
    public RtypeDto(String title){
        this.title=title;
    }

    public Rtype toEntity() {
        return new Rtype(title);
    }

}
