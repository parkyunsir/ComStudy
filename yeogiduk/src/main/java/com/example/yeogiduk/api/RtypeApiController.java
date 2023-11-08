package com.example.yeogiduk.api;

import com.example.yeogiduk.dto.RtypeDto;
import com.example.yeogiduk.entity.Rtype;
import com.example.yeogiduk.service.RtypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class RtypeApiController {
    @Autowired
    private RtypeService rtypeService;

    //rtype 등록하기
    @PostMapping("rtype/upload")
    public ResponseEntity<Rtype> rupload(@RequestBody RtypeDto rtypeDto) {
        Rtype rType = rtypeService.rupload(rtypeDto);
        return (rType != null) ?
                ResponseEntity.status(HttpStatus.OK).body(rType) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

}
