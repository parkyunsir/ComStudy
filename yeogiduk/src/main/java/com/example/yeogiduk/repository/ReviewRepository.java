package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long>{

    // 네이티브 쿼리 메서드로 쿼리 작성
    // @Query 어노테이션은 모든 리뷰 조회, orm.xml파일은 학생이 작성한 모든 리뷰 조회


    // 특정 게시글의 모든 댓글 조회
    @Query(value = "SELECT * FROM Review WHERE rst_id=:rstId ORDER BY view_id DESC", nativeQuery = true)
    List<Review> findByRstId(@Param("rstId") Long rstId);

    // 특정 닉네임의 모든 댓글 조회
    @Query(value = "SELECT * FROM Review WHERE email=:email ORDER BY view_id DESC", nativeQuery = true)
    List<Review> findByEmail(@Param("email") String email); // 네이티브 쿼리로 작성
}
