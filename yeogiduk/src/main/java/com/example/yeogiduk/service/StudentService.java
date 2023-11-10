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

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class StudentService /*implements UserDetailsService*/{
    @Autowired
    private StudentRepository studentRepository;

    //@Autowired
    //private RestaurantRepository restaurantRepository;

    @Autowired
    private TokenProvider tokenProvider;

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public Student login(StudentDto dto) {
        log.info("어라라");
        Student student = studentRepository.findByEmail(dto.getEmail())
                .orElse(null);
        log.info("짜잔");
        if(student != null && bCryptPasswordEncoder.matches(dto.getPassword(), student.getPassword())) {
            log.info("좋아요");
            final String token = tokenProvider.generateToken(student, Duration.ofDays(2));
            StudentDto studentDto = StudentDto.builder()
                    .email(student.getEmail())
                    .password(student.getPassword())
                    .token(token)
                    .build();
            return studentDto.toEntity();
        }
        return null;
    }

    public Student join(StudentDto dto) {
        if(!dto.getEmail().endsWith("@duksung.ac.kr")) {
            return null;
        }
        Student student = studentRepository.findByEmail(dto.getEmail())
                .orElse(null);
        if(student != null) {
            return null;
        }
        Student joined = Student.builder()
                .email(dto.getEmail())
                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                .build();
        return studentRepository.save(joined);
    }

    public Student pwUpdate(String email, StudentDto dto) {
        Student student = studentRepository.findByEmail(email)
                .orElse(null);
        if(student == null) {
            return null;
        }
        student.setPassword(bCryptPasswordEncoder.encode(dto.getPassword()));
        return student;
    }

    public Student addLike(String email, StudentDto dto) {
        Student student = studentRepository.findByEmail(email)
                .orElse(null);
        if(student == null) {
            return null;
        }/*
        Restaurant restaurant = restaurantRepository.findById(dto.getLikes())
                .orElse(null);
        if(restaurant == null) {
            return null;
        }
        List<Long> list = student.getLikes();
        for(Long i : list) {
            if(restaurant.getId() == i) {
                list.remove(i);
                return student;
            }
        }
        list.add(restaurant.getId());*/
        return student;
    }

    public List<Restaurant> getLikes(String email) {
        Student student = studentRepository.findByEmail(email)
                .orElse(null);
        if(student == null) {
            return null;
        }
        List<Restaurant> list = new ArrayList<Restaurant>();/*
        for(Long i : student.getLikes()) {
            list.add(restaurantRepository.findById(i));
        }*/
        return list;
    }
/*
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Student student;
        student = studentRepository.findByEmail("1234@duksung.ac.kr")
                .orElse(null);
        if(student == null) {
            throw new UsernameNotFoundException(username);
        }
        return student;
    }*/
}
