package com.example.yeogiduk.repository;

import com.example.yeogiduk.entity.Restaurant;
import com.example.yeogiduk.entity.Rtype;
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
public class RtypeRepositoryTest {
    @Autowired
    RtypeRepository rtypeRepository;

    @Test
    @DisplayName("식당의 타입 조회")
    void findByRstId() {
        Long rstId = 1L;
        Rtype rtype = rtypeRepository.findByRstId(rstId);

        Rtype expected = new Rtype(1L, "한식");

        assertEquals(expected.toString(), rtype.toString(), "Id가 1인 식당의 타입 출력");
    }
}
