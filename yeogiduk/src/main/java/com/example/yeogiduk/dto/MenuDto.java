package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.entity.Rtype;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class MenuDto {
    private Long rstId;
    private String menu;
    private Integer price;

    public Menu toEntity() {
        return new Menu(rstId, menu, price);
    }

    public Long getRstid(){
        return rstId;
    }

    public void setRstid(Long rstId){
        this.rstId=rstId;
    }
}
