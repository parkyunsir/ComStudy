package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Restaurant findByRstId(Long rstId);

    List<Restaurant> findByTypeId(Long typeId);

    @Query(value = "SELECT * FROM Restaurant WHERE name like concat('%',:word,'%')", nativeQuery = true)
    List<Restaurant> findByWord(@Param("word") String word);

    @Query(value = "SELECT * FROM Restaurant r ORDER BY (SELECT SUM(star)/COUNT(*) FROM Review WHERE rst_id=r.rst_id) desc limit 10", nativeQuery = true)
    List<Restaurant> findByStar();

    @Query(value = "SELECT * FROM Restaurant r ORDER BY (SELECT COUNT(*) FROM Likes WHERE rst_id=r.rst_id) desc limit 10", nativeQuery = true)
    List<Restaurant> findByLike();

    @Query(value = "SELECT * FROM Restaurant r ORDER BY (SELECT COUNT(*) FROM Review WHERE rst_id=r.rst_id) desc limit 10", nativeQuery = true)
    List<Restaurant> findByReview();
}
