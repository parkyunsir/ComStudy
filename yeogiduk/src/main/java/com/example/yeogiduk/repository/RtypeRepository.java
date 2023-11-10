package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Rtype;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RtypeRepository extends JpaRepository<Rtype, String>{
    Rtype findBytype(String title);

}
