package com.example.yeogiduk.api;

import com.example.yeogiduk.dto.RestaurantDto;
import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurant")
public class RestaurantApiController {

    private final RestaurantService restaurantService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadRestaurant(@RequestBody final RestaurantDto restaurantDto) {
        restaurantService.uploadRestaurant(restaurantDto);
        return new ResponseEntity<>("식당 업로드 완료", HttpStatus.OK);
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

        if (restaurantDto != null) {
            return new ResponseEntity<>(restaurantDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

