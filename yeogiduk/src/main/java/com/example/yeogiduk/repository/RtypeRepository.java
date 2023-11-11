package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Rtype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RtypeRepository extends CrudRepository<Rtype, Long>{
    Rtype findByTypeId(Long typeId);

}
