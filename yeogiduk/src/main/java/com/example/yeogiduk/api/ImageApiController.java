package com.example.yeogiduk.api;
import ch.qos.logback.core.model.Model;
import com.example.yeogiduk.dto.ImageDto;
import com.example.yeogiduk.dto.ReviewDto;
import com.example.yeogiduk.entity.Image;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

public class ImageApiController {

    @GetMapping("/form")
    public String homView(Model model){
        model.addAttribute("review", new ReviewRequest());
        return "home";
    }
    @Getter
    @Setter
    public class ReviewRequest {

        private String reviewName;
        private Integer qty;
        private MultipartFile file;
    }
    @Value("${image.path}")
    private String uploadDir;

    @PostMapping("/form")
    public String saveFormRequests(@ModelAttribute("review") ReviewRequest reviewRequest) throws IOException {
        String reviewName = reviewRequest.getReviewName();
        Integer qty = reviewRequest.getQty();
        ReviewDto reviewDto = reviewDto.builder()
                .reviewName(reviewName)
                .qty(qty)
                .build();

        if (reviewRequest.getFile() != null) {
            MultipartFile file = reviewRequest.getFile();
            String fullPath = uploadDir + file.getOriginalFilename();
            file.transferTo(new Image(fullPath));
            log.info("file.getOriginalFilename = {}", file.getOriginalFilename());
            log.info("fullPath = {}", fullPath);

            ImageDto fileDto = ImageDto.builder()
                    .originFileName(file.getOriginalFilename())
                    .fullPath(uploadDir + file.getOriginalFilename())
                    .build();
            Long setImageId= imageService.save(fileDto);
            reviewDto.setImageId(savedImageId);
        }
        reviewService.save(reviewDto);

        return "redirect:/form";
    }
}
