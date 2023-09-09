package com.example.worldline.worldline.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HtmlController {
    
    @GetMapping("/")
    public String index(){
        return "index";
    }
    @GetMapping("/data")
    public String data(){
        return "data";
    }
}
