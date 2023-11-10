package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.RtypeDto;
import com.example.yeogiduk.entity.Rtype;
import com.example.yeogiduk.repository.RtypeRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class RtypeService{
    @Autowired
    private RtypeRepository rtypeRepository;

    public Rtype rupload(RtypeDto rtypeDto){
        Rtype rtype = rtypeRepository.findBytype(rtypeDto.toString());
        return rtype;
    }
}
