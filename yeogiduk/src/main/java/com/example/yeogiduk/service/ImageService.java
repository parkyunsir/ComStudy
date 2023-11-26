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

    public List<Image> showImage(Long viewId) {
        return imageRepository.findByViewId(viewId);
    }

    public Image showOneImage(Long viewId) { return imageRepository.findBy1ViewId(viewId); }

    public Image showRstOneImage(Long rstId) {
        return imageRepository.findByRstId(rstId);
    }

    public List<Image> showRstImage(Long rstId) { return imageRepository.find4ByRstId(rstId); }
/*
    public List<Resource> showImage(Long viewId) throws MalformedURLException {
        List<Image> images = imageRepository.findByViewId(viewId);
        if(images == null) {
            return null;
        }
        List<Resource> result = new ArrayList<>();
        for(Image image : images) {
            result.add(new UrlResource("file://"+image.getSavedFileName()));
        }
        return result;
    }

    public Resource showOneImage(Long rstId) throws MalformedURLException {
        Image image = imageRepository.findByRstId(rstId);
        if(image == null) {
            return null;
        }
        return new UrlResource("file://"+image.getSavedFileName());
    }*/
}
