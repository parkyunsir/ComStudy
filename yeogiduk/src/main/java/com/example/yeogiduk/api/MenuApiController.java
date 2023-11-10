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

@RestController
@RequestMapping("/menu")
public class MenuApiController {
    @Autowired
    private MenuService menuService;

    //메뉴 올리기
    @PostMapping("/menu/upload")
    public ResponseEntity<Menu> mupload(@RequestParam Long rstId, @RequestBody MenuDto menuDto) {
        menuDto.setRstid(rstId);
        ResponseEntity<Menu> menu = menuService.mupload(menuDto);
        return (menu.getBody() != null) ?
                ResponseEntity.status(menu.getStatusCode()).body(menu.getBody()) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

}
