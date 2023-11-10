package com.example.yeogiduk.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Time;

@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "Restaurant")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RstId", unique = true, nullable = false)
    private int RstId;

    @Column(length = 50, nullable = false)
    private String rName;

    @ManyToOne
    @JoinColumn(name = "typeId", nullable = false)
    private Rtype rtype;

    @Column(length = 100, nullable = false)
    private String loc;

    @Column(nullable = false)
    private Time startTime;

    @Column(nullable = false)
    private Time endTime;

    @Column(length = 200, nullable = false)
    private String intro;
}
