package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.entity.Restaurant;
import lombok.*;

import java.sql.Time;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantDto {
    private Long RstId;
    private Integer typeId;
    private String rName;
    private String loc;
    private Time startTime;
    private Time endTime;
    private String intro;

    public Restaurant toEntity() {
        return new Restaurant(RstId, rName, null, loc, startTime, endTime, intro);
    }
}


