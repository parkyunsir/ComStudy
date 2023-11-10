package com.example.yeogiduk.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Menu {
    @Column
    private Long rstId;
    @Column
    private String menu;
    @Column
    private Integer price;

    @Builder
    public Menu(Long rstId, String menu, Integer price){
        this.rstId=rstId;
        this.menu=menu;
        this.price=price;
    }
}
