package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Likes;
import com.example.yeogiduk.entity.Review;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LikesRepository extends CrudRepository<Likes, Long> {
    List<Likes> findByEmail(String email);

    List<Likes> findByRstId(Long rstId);
}
