package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.StudentDto;
import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Student;
import com.example.yeogiduk.repository.RestaurantRepository;
import com.example.yeogiduk.repository.StudentRepository;
import com.example.yeogiduk.security.TokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Slf4j
@Service
public class StudentService implements UserDetailsService{
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private TokenProvider tokenProvider;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public Student login(StudentDto dto) {
        Student student = studentRepository.findBysEmail(dto.getSEmail())
                .orElse(null);
        if(student != null && bCryptPasswordEncoder.matches(dto.getPassword(), student.getPassword())) {
            return Student.builder()
                    .sEmail(student.getSEmail())
                    .password(dto.getPassword())
                    .likes(dto.getLikes())
                    .build();
        }
        return null;
    }

    public Student join(StudentDto dto) {
        if(!dto.getSEmail().endsWith("@duksung.ac.kr")) {
            return null;
        }
        Student student = studentRepository.findBysEmail(dto.getSEmail())
                .orElse(null);
        if(student != null) {
            return null;
        }
        Student joined = Student.builder()
                .sEmail(dto.getSEmail())
                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                .build();
        return studentRepository.save(joined);
    }

    public Student pwUpdate(String sEmail, StudentDto dto) {
        Student student = studentRepository.findBysEmail(sEmail)
                .orElse(null);
        if(student == null) {
            return null;
        }
        student.setPassword(bCryptPasswordEncoder.encode(dto.getPassword()));
        return student;
    }

    public Student addLike(String sEmail, int restaurantId) {
        Student student = studentRepository.findBysEmail(sEmail)
                .orElse(null);
        if(student == null) {
            return null;
        }/*
        Restaurant restaurant = restaurantRepository.findById(restaurantId)
                .orElse(null);
        if(restaurant == null) {
            return null;
        }
        List<Restaurant> list = student.getLikes();
        for(Restaurant r : list) {
            if(restaurant == r) {
                list.remove(restaurant);
                return student;
            }
        }
        list.add(restaurant);*/
        return student;
    }

    public List<Restaurant> getLikes(String sEmail) {
        Student student = studentRepository.findBysEmail(sEmail)
                .orElse(null);
        if(student == null) {
            return null;
        }
        return student.getLikes();
    }

    @Override
    public UserDetails loadUserByUsername(String sEmail) throws UsernameNotFoundException {
        return studentRepository.findBysEmail(sEmail)
                .orElseThrow(() -> new IllegalArgumentException(sEmail));
    }
}
