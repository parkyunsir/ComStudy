package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Restaurant;
import lombok.*;

import java.sql.Time;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RestaurantDto {
    private Long rstId;
    private String name;
    private Long typeId;
    private String loc;
    private Time startTime;
    private Time endTime;
    private String intro;
    public Restaurant toEntity() {
        return new Restaurant(rstId, name, typeId, loc, startTime, endTime, intro);
    }
}
