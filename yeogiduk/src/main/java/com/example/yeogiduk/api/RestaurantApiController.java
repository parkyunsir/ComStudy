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
    public ResponseEntity<List<RestaurantDto>> getRestaurantListByType(@PathVariable int typeId) {
        List<RestaurantDto> restaurantDtoList = rtypeRepository.findBytype(typeId);
        return new ResponseEntity<>(restaurantDtoList, HttpStatus.OK);
    }

<<<<<<< HEAD
    @GetMapping("/detail/{rstId}")
    public ResponseEntity<RestaurantDto> getRestaurantDetail(@PathVariable Long rstId) {
        RestaurantDto restaurantDto = restaurantService.getRestaurantDetail(rstId);

        if (restaurantDto != null) {
            return new ResponseEntity<>(restaurantDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
=======
    @GetMapping("/detail/{RstId}")
    public ResponseEntity<RestaurantDto> getRestaurantDetail(@PathVariable Long rstId) {
        RestaurantDto restaurantDto = restaurantService.getRestaurantDetail(rstId);
        return (restaurantDto != null) ?
                ResponseEntity.status(HttpStatus.OK).body(restaurantDto) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
>>>>>>> 47d642359da8bb445616d5af445baeb61b8bc969
    }
}

