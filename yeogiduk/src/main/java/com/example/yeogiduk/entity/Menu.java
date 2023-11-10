package com.example.yeogiduk.entity;

import lombok.Builder;

public class Menu {
    private Integer Rstid;
    private String menu;
    private Integer price;

    @Builder
    public Menu(Integer Rstid, String menu, Integer price){
        this.Rstid=Rstid;
        this.menu=menu;
        this.price=price;
    }
}
