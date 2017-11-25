package com.forestnewark.Library.Manager.controller;

import com.forestnewark.Library.Manager.Repository.CompositionRepository;
import com.forestnewark.Library.Manager.bean.Composition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Forest on 11/25/17.
 */
@org.springframework.web.bind.annotation.RestController
public class RestController {


    @Autowired
    CompositionRepository compositionRepository;


    /**
     * Check service is up and running
     * Loading for Heroku Free Servers
     * @return status code
     */
    @RequestMapping("/servicetest")
    public ResponseEntity serviceTest(){
        return new ResponseEntity(HttpStatus.OK);
    }


    /**
     * Get all compositions
     * @return all compositions (unsorted)
     */
    @RequestMapping("/compositions")
    public List<Composition> getAllCompositions(){
        return compositionRepository.findAll();
    }


}
