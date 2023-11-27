package com.example.yeogiduk.api;
import com.example.yeogiduk.entity.Image;
import com.example.yeogiduk.service.ImageService;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.file.ConfigurationSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

@RestController
public class ImageApiController {
    @Autowired
    private ImageService imageService;

    // 한 리뷰에 사진들 보기
    @GetMapping("/image/show/{viewId}")
    public List<Image> showImage(@PathVariable Long viewId) {
        return imageService.showImage(viewId);
    }

    // 한 리뷰에 한 사진 보기
    @GetMapping("/image/show/one/{viewId}")
    public Image showOneImage(@PathVariable Long viewId) {return imageService.showOneImage(viewId); }

    // 한 식당에 가장 최근 사진 하나 보기
    @GetMapping("/image/show/restaurant/one/{rstId}")
    public Image showRstOneImage(@PathVariable Long rstId) {
        return imageService.showRstOneImage(rstId);
    }

    // 한 식당에 가장 최근 사진 4개 보기
    @GetMapping("/image/show/restaurant/{rstId}")
    public List<Image> showRstImage(@PathVariable Long rstId) {return imageService.showRstImage(rstId);}
/*
    // 한 리뷰에 사진들 보기
    @GetMapping("/image/show/{viewId}")
    public List<Resource> showImage(@PathVariable Long viewId) throws MalformedURLException {
        return imageService.showImage(viewId);
    }

    // 한 식당에 가장 최근 사진 하나 보기
    @GetMapping("/image/show/one/{rstId}")
    public Resource showOneImage(@PathVariable Long rstId) throws MalformedURLException {
        return imageService.showOneImage(rstId);
    }*/
}