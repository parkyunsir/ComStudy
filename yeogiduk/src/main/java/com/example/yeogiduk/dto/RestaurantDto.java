package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.entity.Restaurant;
import lombok.*;

import java.sql.Time;

@Getter
@Setter
@NoArgsConstructor
@Builder
public class RestaurantDto {
    private Long RstId;
    private int typeId;
    private String rName;
    private String loc;
    private Time startTime;
    private Time endTime;
    private String intro;

    public RestaurantDto(Long RstId, int typeId, String rName, String loc, Time startTime, Time endTime, String intro) {
        this.RstId = RstId;
        this.typeId = typeId;
        this.rName = rName;
        this.loc = loc;
        this.startTime = startTime;
        this.endTime = endTime;
        this.intro = intro;
    }
    public Restaurant toEntity() {
        return new Restaurant(RstId, typeId, rName, loc, startTime, endTime, intro);
    }
}
