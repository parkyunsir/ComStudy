package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.FileDto;
import com.example.yeogiduk.repository.FileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class FileService {

    private final FileRepository fileRepository;
/*
    @Transactional
    public Long save(FileDto fileDto) {
        return fileRepository.save(FileDto.toEntity()).getId();
    }

 */
}
