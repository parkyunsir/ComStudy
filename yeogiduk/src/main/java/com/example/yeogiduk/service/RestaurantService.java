package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.RestaurantDto;
import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    public void uploadRestaurant(RestaurantDto restaurantDto) {
        Restaurant restaurant = convertDtoToEntity(restaurantDto);
        restaurantRepository.save(restaurant);
    }

    public List<RestaurantDto> getRestaurantListDto() {
        List<Restaurant> restaurantList = restaurantRepository.findAll();
        return restaurantList.stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    // Rtype으로 검색해야하는데 어떻게 해야하는지 모르겠음
    public List<RestaurantDto> getRestaurantListByType(Long RstId) {
        //List<Restaurant> restaurantList = restaurantRepository.findById(RstId);
        return restaurantList.stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    public RestaurantDto getRestaurantDetail(Long RstId) {
        Restaurant restaurant = restaurantRepository.findById(RstId).orElse(null);

        if (restaurant != null) {
            return convertEntityToDto(restaurant);
        } else {
            return null;
        }
    }

    private Restaurant convertDtoToEntity(RestaurantDto restaurantDto) {
        return Restaurant.builder()
                .rName(restaurantDto.getRName())
                .rtype(restaurantDto.getRtype().getTypeId())
                .loc(restaurantDto.getLoc())
                .startTime(restaurantDto.getStartTime())
                .endTime(restaurantDto.getEndTime())
                .intro(restaurantDto.getIntro())
                .build();
    }

    private RestaurantDto convertEntityToDto(Restaurant restaurant) {
        return RestaurantDto.builder()
                .RstId(restaurant.getRstId())
                .typeId(restaurant.getRtype().getTypeId())
                .rName(restaurant.getRName())
                .loc(restaurant.getLoc())
                .startTime(restaurant.getStartTime())
                .endTime(restaurant.getEndTime())
                .intro(restaurant.getIntro())
                .build();
    }
}
