package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.RtypeDto;
import com.example.yeogiduk.entity.Rtype;
import com.example.yeogiduk.repository.RtypeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class RtypeService{
    @Autowired
    private RtypeRepository rtypeRepository;

    @Transactional
    public Rtype rupload(RtypeDto rtypeDto){
        Rtype rtype = Rtype.createRtype(rtypeDto);
        rtypeRepository.save(rtype);
        return rtype;
    }

    public Rtype getRtype(Long rstId) {
        return rtypeRepository.findByRstId(rstId);
    }
}
