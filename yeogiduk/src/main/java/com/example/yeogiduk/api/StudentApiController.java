package com.example.yeogiduk.api;

import com.example.yeogiduk.dto.LikesDto;
import com.example.yeogiduk.dto.StudentDto;
import com.example.yeogiduk.entity.Likes;
import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Student;
import com.example.yeogiduk.repository.StudentRepository;
import com.example.yeogiduk.service.StudentService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class StudentApiController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepository studentRepository;

    // 로그인
    @PostMapping("/student/login")
    public ResponseEntity<Student> login(@RequestBody StudentDto dto) {
        Student student = studentService.login(dto);
        return (student != null) ?
                ResponseEntity.status(HttpStatus.OK).body(student) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // 회원가입
    @PostMapping("/student/join")
    public ResponseEntity<Student> join(@RequestBody StudentDto dto) {
        Student student = studentService.join(dto);
        return (student != null) ?
                ResponseEntity.status(HttpStatus.OK).body(student) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // 로그아웃
    @GetMapping("/student/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        new SecurityContextLogoutHandler().logout(request, response,
                SecurityContextHolder.getContext().getAuthentication());
        return "logout";
    }

    // 비밀번호 변경
    @PatchMapping("/student/pwupdate/{email}")
    public ResponseEntity<Student> pwUpdate(@PathVariable String email, @RequestBody StudentDto dto) {
        Student updated = studentService.pwUpdate(email, dto);
        return (updated != null) ?
                ResponseEntity.status(HttpStatus.OK).body(updated) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // 식당 찜하기
    @PostMapping("/student/likes")
    public String addLike(@RequestBody LikesDto dto) {
        return studentService.addLike(dto);
    }

    // 내가 찜한 리스트
    @GetMapping("/student/likes/{email}")
    public List<Restaurant> getLikes(@PathVariable String email) {
        return studentService.getLikes(email);
    }
}
