package com.example.yeogiduk.api;

import com.example.yeogiduk.dto.RtypeDto;
import com.example.yeogiduk.entity.Rtype;
import com.example.yeogiduk.service.RtypeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
public class RtypeApiController {
    @Autowired
    private RtypeService rtypeService;

    //rtype 등록하기
    @PostMapping("/rtype/upload")
    public ResponseEntity<Rtype> rupload(@RequestBody RtypeDto rtypeDto) {
        Rtype rtype = rtypeService.rupload(rtypeDto);
        return (rtype != null) ?
                ResponseEntity.status(HttpStatus.OK).body(rtype) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @GetMapping("/rtype/{typeId}")
    public ResponseEntity<Rtype> getRtype(@PathVariable Long typeId) {
        Rtype rtype = rtypeService.getRtype(typeId);
        return (rtype != null) ?
                ResponseEntity.status(HttpStatus.OK).body(rtype) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}
