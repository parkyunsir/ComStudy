package com.example.yeogiduk.entity;

import lombok.Builder;

public class Rtype {
    private String rType;
//    private int rType;

    @Builder
    public Rtype(String rType){
        this.rType=rType;
    }

}
