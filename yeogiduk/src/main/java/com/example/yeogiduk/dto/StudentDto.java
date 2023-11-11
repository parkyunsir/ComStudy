package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Student;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StudentDto {
    private String email;
    private String password;
    private String token;

    public Student toEntity() { return new Student(email, password); }
}
