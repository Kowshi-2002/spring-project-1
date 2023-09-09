package com.example.worldline.worldline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.worldline.worldline.entity.Forms;
import com.example.worldline.worldline.repository.FormRepository;

@RestController
public class FormController {
    
    @Autowired
    private FormRepository formrepo;

    @GetMapping("/all")
    public List<Forms> getall(){
        return formrepo.findAll();
    }

    @PostMapping("/post-data")
    public Forms postall(@RequestBody Forms forms){
        return formrepo.save(forms);
    }

}
