package com.example.yeogiduk.dto;

import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Student;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
public class StudentDto {
    private String sEmail;
    private String password;
    private List<Restaurant> likes;
    private String auth;

    @Builder
    public StudentDto(String sEmail, String password, String auth) {
        this.sEmail = sEmail;
        this.password = password;
        this.auth = auth;
    }

    public Student toEntity() { return new Student(sEmail, password, likes); }
}
