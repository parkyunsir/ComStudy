package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.entity.Rtype;
import lombok.Builder;

public class MenuDto {
    private Integer Rstid;
    private String menu;
    private Integer price;

    @Builder
    public MenuDto(Integer Rstid, String menu, Integer price){
        this.Rstid=Rstid;
        this.menu=menu;
        this.price=price;
    }

    public Menu toEntity() {
        return new Menu(Rstid, menu, price);
    }
}
