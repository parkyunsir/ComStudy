package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Student;
import lombok.*;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StudentDto {
    private String sEmail;
    private String password;
    private List<Restaurant> likes;
    private String token;

    public Student toEntity() { return new Student(sEmail, password, likes); }
}
