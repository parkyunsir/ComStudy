package com.example.yeogiduk.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/images_review/**")
                .addResourceLocations("file:///" + "C:/SoftWare4/YeoGiDuk" + "/yeogiduk/src/main/resources/static/images_review/");
    }
}

//SuA : "C:/SG_2023/yeogiduk/ComStudy"