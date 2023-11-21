package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.ImageDto;
import com.example.yeogiduk.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class ImageService {

    private final ImageRepository imageRepository;

    @Transactional
    public Long save(ImageDto imageDto) {
        return imageRepository.save(ImageDto.toEntity()).getId();
    }
}
