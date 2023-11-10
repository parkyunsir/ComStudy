package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, String> {
    Optional<Student> findByEmail(String email);
}
