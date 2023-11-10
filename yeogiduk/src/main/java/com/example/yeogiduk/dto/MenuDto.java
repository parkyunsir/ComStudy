package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.entity.Rtype;
import lombok.Builder;

public class MenuDto {
    private long rstId;
    private String menu;
    private Integer price;

    @Builder
    public MenuDto(long rstId, String menu, Integer price){
        this.rstId=rstId;
        this.menu=menu;
        this.price=price;
    }

    public Menu toEntity() {
        return new Menu(rstId, menu, price);
    }
}
