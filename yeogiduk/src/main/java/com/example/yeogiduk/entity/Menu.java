package com.example.yeogiduk.entity;

import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.dto.RtypeDto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Menu {
    @Id
    private Long rstId;
    @Column
    private String menu;
    @Column
    private Integer price;

    public static Menu createMenu(MenuDto mDto) {
        return new Menu(
                mDto.getRstid(),
                mDto.getMenu(),
                mDto.getPrice()
        );
    }
}
