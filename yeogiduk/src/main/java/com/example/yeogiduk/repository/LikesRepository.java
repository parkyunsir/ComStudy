package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Likes;
import com.example.yeogiduk.entity.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LikesRepository extends CrudRepository<Likes, Long> {
    List<Likes> findByEmail(String email);

    List<Likes> findByRstId(Long rstId);

    @Query(value = "SELECT * FROM Likes WHERE email=:email and rst_id=:rstId", nativeQuery = true)
    Likes findByEmailAndRstId(@Param("email") String email, @Param("rstId") Long rstId);
}
