package com.example.yeogiduk.entity;

import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;
import lombok.*;


@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Image {

    @Id @GeneratedValue
    private Long id;
    @Column(nullable = false)
    private String originFileName;
    @Column(nullable = false)
    private String fullPath;

    @Builder
    public Image(Long id, String originFileName, String fullPath) {
        this.id = id;
        this.originFileName = originFileName;
        this.fullPath = fullPath;
    }

    public Image(String fullPath) {
    }
}
