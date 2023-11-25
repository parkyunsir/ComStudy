package com.example.yeogiduk.service;

import com.example.yeogiduk.dto.ImageDto;
import com.example.yeogiduk.entity.Image;
import com.example.yeogiduk.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public List<Image> saveImage(Long viewId, List<MultipartFile> files) throws IOException {
        List<ImageDto> dtos = new ArrayList<>();
        for(MultipartFile file : files) {
            ImageDto dto = ImageDto.builder()
                    .viewId(viewId)
                    .originFileName(file.getOriginalFilename())
                    .build();
            dtos.add(dto);
            file.transferTo(new File(dto.getSavedFileName()));
        }
        List<Image> images = new ArrayList<>();
        for(ImageDto d : dtos) {
            Image image = Image.createImage(d);
            images.add(image);
            imageRepository.save(image);
        }
        return images;
    }

    public List<Resource> showImage(Long viewId) throws MalformedURLException {
        List<Image> images = imageRepository.findByViewId(viewId);
        List<Resource> result = new ArrayList<>();
        for(Image image : images) {
            result.add(new UrlResource("file:"+image.getSavedFileName()));
        }
        return result;
    }

    public Resource showOneImage(Long rstId) throws MalformedURLException {
        Image image = imageRepository.findByRstId(rstId);
        return new UrlResource("file:"+image.getSavedFileName());
    }
}
