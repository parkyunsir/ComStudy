package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public ResponseEntity<Menu> mupload(MenuDto menuDto){
        try {
            List<Menu> menuList = menuRepository.findByRstId(menuDto.getRstId());

            if (!menuList.isEmpty()){
                Menu menu = menuList.get(0);
                return new ResponseEntity<>(menu, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND); //비었음
            }
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
