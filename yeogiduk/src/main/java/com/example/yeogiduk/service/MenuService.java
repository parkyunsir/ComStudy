package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    @Transactional
    public Menu mupload(MenuDto menuDto){
        Menu menu = Menu.createMenu(menuDto);
        menuRepository.save(menu);
        return menu;
    }
}
