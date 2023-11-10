package com.example.yeogiduk.repository;

import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.entity.Menu;

public interface MenuRepository {
    Menu findByRstId(Integer Rstid);
}
