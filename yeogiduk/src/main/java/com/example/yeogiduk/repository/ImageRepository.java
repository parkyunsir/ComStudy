package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findByViewId(Long viewId);

    @Query(value = "SELECT * FROM Image WHERE view_id=(SELECT view_id FROM Review WHERE rst_id=:rstId ORDER BY view_id DESC LIMIT 1) LIMIT 1", nativeQuery = true)
    Image findByRstId(@Param("rstId") Long rstId);

    @Query(value = "SELECT * FROM Image WHERE view_id in (SELECT view_id FROM Review WHERE rst_id=:rstId ORDER BY view_id DESC) LIMIT 4", nativeQuery = true)
    List<Image> find4ByRstId(@Param("rstId") Long rstId);

    @Query(value = "SELECT * FROM Image WHERE view_id=:viewId LIMIT 1", nativeQuery = true)
    Image findBy1ViewId(@Param("viewId") Long viewId);
}
