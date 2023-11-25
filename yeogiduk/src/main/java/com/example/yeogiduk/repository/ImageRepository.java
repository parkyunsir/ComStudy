package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findByViewId(Long viewId);

    @Query(value = "SELECT * FROM IMAGE WHERE viewId=(SELECT viewId FROM Review WHERE rstId=:rstId ORDER BY viewId desc LIMIT 1) LIMIT 1", nativeQuery = true)
    Image findByRstId(@Param("rstId") Long rstId);
}
