package com.example.yeogiduk.api;

import com.example.yeogiduk.dto.RestaurantDto;
import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Rtype;
import com.example.yeogiduk.repository.RtypeRepository;
import com.example.yeogiduk.service.RestaurantService;
import com.example.yeogiduk.service.RtypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurant")
@CrossOrigin(origins = "http://localhost:3000")
public class RestaurantApiController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private RtypeRepository rtypeRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadRestaurant(@RequestBody final RestaurantDto restaurantDto) {
        restaurantService.uploadRestaurant(restaurantDto);
        return ResponseEntity.status(HttpStatus.OK).body("식당 업로드 완료");
    }

    @GetMapping("/list")
    public ResponseEntity<List<RestaurantDto>> getRestaurantList() {
        List<RestaurantDto> restaurantDtoList = restaurantService.getRestaurantListDto();
        return new ResponseEntity<>(restaurantDtoList, HttpStatus.OK);
    }

    @GetMapping("/list/{typeId}")
    public ResponseEntity<List<RestaurantDto>> getRestaurantListByType(@PathVariable Long typeId) {
        List<RestaurantDto> restaurantDtoList = restaurantService.getRestaurantListByType(typeId);
        return new ResponseEntity<>(restaurantDtoList, HttpStatus.OK);
    }

    @GetMapping("/detail/{rstId}")
    public ResponseEntity<RestaurantDto> getRestaurantDetail(@PathVariable Long rstId) {
        RestaurantDto restaurantDto = restaurantService.getRestaurantDetail(rstId);
        return (restaurantDto != null) ?
                ResponseEntity.status(HttpStatus.OK).body(restaurantDto) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //전체 찜 목록
    @GetMapping("/likes/list/{rstId}")
    public int getLikesNumber(@PathVariable Long rstId) {
        return restaurantService.getLikesNumber(rstId);
    }
}

