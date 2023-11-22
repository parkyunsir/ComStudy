package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Restaurant;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@AutoConfigureTestDatabase(replace=AutoConfigureTestDatabase.Replace.NONE)
public class RestaurantRepositoryTest {
    @Autowired
    RestaurantRepository restaurantRepository;
    @Test
    @DisplayName("특정 이름의 모든 식당 조회")
    void findByWord() {
        String word = "국물";
        List<Restaurant> list = restaurantRepository.findByWord(word);

        Restaurant a = new Restaurant(3L, "국물1", 1L, null, null, null, null);
        Restaurant b = new Restaurant(4L, "국물2", 1L, null, null, null, null);
        List<Restaurant> expected = Arrays.asList(a, b);

        assertEquals(expected.toString(), list.toString(), "국물의 모든 식당 출력");
    }
}
