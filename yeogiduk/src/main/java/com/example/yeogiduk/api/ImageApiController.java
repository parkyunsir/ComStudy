package com.example.yeogiduk.api;
import com.example.yeogiduk.entity.Image;
import com.example.yeogiduk.service.ImageService;
import org.apache.tomcat.util.file.ConfigurationSource;
import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/image/save/{viewId}")
    public ResponseEntity<List<Image>> saveImage(@PathVariable Long viewId, @RequestParam List<MultipartFile> files) throws IOException {
        List<Image> savedFile = imageService.saveImage(viewId, files);
        return (savedFile != null) ?
                ResponseEntity.status(HttpStatus.OK).body(savedFile) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
//@RequestParam
    // 한 리뷰에 사진들 보기
    @GetMapping("/image/show/{viewId}")
    public ResponseEntity<List<Resource>> showImage(@PathVariable Long viewId) throws MalformedURLException {
        List<Resource> images = imageService.showImage(viewId);
        return (images != null) ?
                ResponseEntity.status(HttpStatus.OK).body(images) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // 한 식당에 가장 최근 사진 하나 보기
    @GetMapping("/image/show/one/{rstId}")
    public ResponseEntity<Resource> showOneImage(@PathVariable Long rstId) throws MalformedURLException {
        Resource image = imageService.showOneImage(rstId);
        return (image != null) ?
                ResponseEntity.status(HttpStatus.OK).body(image) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}

//@Value("${uploadPath}")
//    String uploadPath;