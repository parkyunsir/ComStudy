package com.example.yeogiduk.api;

import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.dto.RtypeDto;
import com.example.yeogiduk.entity.Menu;
import com.example.yeogiduk.entity.Rtype;
import com.example.yeogiduk.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MenuApiController {
    @Autowired
    private MenuService menuService;

    @GetMapping("/menu/{rstId}")
    public ResponseEntity<List<Menu>> show(@PathVariable Long rstId) {
        List<Menu> menus = menuService.show(rstId);
        return (menus != null) ?
                ResponseEntity.status(HttpStatus.OK).body(menus) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //메뉴 올리기
    @PostMapping("/menu/upload")
    public ResponseEntity<Menu> mupload(@RequestBody MenuDto menuDto) {
        Menu menu = menuService.mupload(menuDto);
        return (menu != null) ?
                ResponseEntity.status(HttpStatus.OK).body(menu) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

}
