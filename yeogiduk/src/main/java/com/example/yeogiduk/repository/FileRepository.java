package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<File, Long> {
}
