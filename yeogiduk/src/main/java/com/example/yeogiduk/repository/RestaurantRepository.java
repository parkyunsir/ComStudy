package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
<<<<<<< HEAD
    List<Restaurant> findByRstId(int rstId);
=======
    List<Restaurant> findByRstId(Long rstId);
>>>>>>> 0e9361502b27172d4a68dc789773ebcefb241cf3
}
