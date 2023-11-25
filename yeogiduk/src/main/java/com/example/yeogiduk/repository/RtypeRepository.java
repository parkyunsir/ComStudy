package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Rtype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface RtypeRepository extends CrudRepository<Rtype, Long>{
    Rtype findByTypeId(Long typeId);

    @Query(value = "SELECT * FROM RType WHERE type_id=(SELECT type_id FROM Restaurant WHERE rst_id=:rstId)", nativeQuery = true)
    Rtype findByRstId(@Param("rstId") Long rstId);
}
