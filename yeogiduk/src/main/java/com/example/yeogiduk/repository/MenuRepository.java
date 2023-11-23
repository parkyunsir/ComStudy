package com.example.yeogiduk.repository;

import com.example.yeogiduk.dto.MenuDto;
import com.example.yeogiduk.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, String> {
    List<Menu> findByRstId(Long rstId);
}
