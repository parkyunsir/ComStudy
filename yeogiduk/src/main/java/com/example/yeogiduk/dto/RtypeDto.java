package com.example.yeogiduk.dto;
import com.example.yeogiduk.entity.Rtype;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RtypeDto {
    private String rType;
//    private int rType;

    //한식 0
    //중식 1
    //일식 2
    //양식 3
    //베트남식 4
    //분식 5
    //카페/디저트 6

//    @Builder
//    public RtypeDto(int rType){
//        this.rType=rType;
//    }
//
//    public Rtype toEntity() {
//        return new Rtype(rType);
//    }

    @Builder
    public RtypeDto(String rType){
        this.rType=rType;
    }

    public Rtype toEntity() {
        return new Rtype(rType);
    }

}
