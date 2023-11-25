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
@Table(name = "Menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long menuId;
    @Column
    private String menu;
    @Column
    private Long price;
    @Column
    private Long rstId;

    public static Menu createMenu(MenuDto mDto) {
        if(mDto.getMenuId() != null)
            throw new IllegalArgumentException("생성 실패! id가 없어야 합니다.");
        return new Menu(
                mDto.getMenuId(),
                mDto.getMenu(),
                mDto.getPrice(),
                mDto.getRstId()
        );
    }
}
