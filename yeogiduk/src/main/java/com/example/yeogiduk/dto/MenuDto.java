package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.entity.Rtype;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class MenuDto {
    private Long menuId;
    private String menu;
    private Long price;
    private Long rstId;

    public Menu toEntity() {
        return new Menu(menuId, menu, price, rstId);
    }

    public void setRstId(Long rstId){
        this.rstId=rstId;
    }
}
