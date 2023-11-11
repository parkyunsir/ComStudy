package com.example.yeogiduk.repository;

import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, String> {
    List<Menu> findByRstId(Long rstId);
}
