package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Restaurant findByRstId(Long rstId);

    List<Restaurant> findByTypeId(Long typeId);
}
