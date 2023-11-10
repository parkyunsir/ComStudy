package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public Menu mupload(MenuDto menuDto){
        Menu menu = menuRepository.findByRstid(menuDto);
        return menu;
    }
}
