package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.LikesDto;
import com.example.yeogiduk.dto.StudentDto;
import com.example.yeogiduk.entity.Likes;
import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Student;
import com.example.yeogiduk.repository.LikesRepository;
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
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class StudentService /*implements UserDetailsService*/{
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private TokenProvider tokenProvider;

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public Student login(StudentDto dto) {
        Student student = studentRepository.findByEmail(dto.getEmail())
                .orElse(null);
        if(student != null && bCryptPasswordEncoder.matches(dto.getPassword(), student.getPassword())) {
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
    @Transactional
    public String addLike(LikesDto dto) {
        Student student = studentRepository.findByEmail(dto.getEmail())
                .orElse(null);
        if(student == null) {
            return null;
        }
        Restaurant restaurant = restaurantRepository.findById(dto.getRstId())
                .orElse(null);
        if(restaurant == null) {
            return null;
        }
        List<Likes> list = likesRepository.findByEmail(dto.getEmail());
        for(Likes like : list) {
            if(like.getRstId() == dto.getRstId()) {
                likesRepository.delete(like);
                return "찜 삭제";
            }
        }
        likesRepository.save(Likes.createLikes(dto));
        return "찜 추가";
    }

    public List<Restaurant> getLikes(String email) {
        Student student = studentRepository.findByEmail(email)
                .orElse(null);
        if(student == null) {
            return null;
        }
        List<Likes> list = likesRepository.findByEmail(email);
        List<Restaurant> restaurants = new ArrayList<>();
        for(Likes like : list) {
            Restaurant restaurant = restaurantRepository.findByRstId(like.getRstId());
            restaurants.add(restaurant);
        }
        return restaurants;
    }

    public Boolean checkLike(String email, Long rstId) {
        Likes like = likesRepository.findByEmailAndRstId(email, rstId);
        return like != null;
    }
/*
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Student student = studentRepository.findByEmail("1234@duksung.ac.kr")
                .orElse(null);
        if(student == null) {
            throw new UsernameNotFoundException(username);
        }
        return student;
    }*/
}
