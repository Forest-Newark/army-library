package com.forestnewark.Library.Manager.controller;

import com.forestnewark.Library.Manager.Repository.CompositionRepository;
import com.forestnewark.Library.Manager.bean.Composition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Forest on 11/25/17.
 */
@org.springframework.web.bind.annotation.RestController
public class RestController {


    @Autowired
    CompositionRepository compositionRepository;

    @RequestMapping("/test")
    public String test(){
        return "test working";
    }


    @RequestMapping("/testGetComp")
    public Composition testComp(){

        Composition comp = new Composition(null,"CS",123,"Magoo","Newark","Laches","Big Band",1923,"awesome");
        return comp;
    }

    @RequestMapping("/testRepo")
    public List<Composition> testRepo(){
        Composition comp = new Composition(null,"CS",123,"Magoo","Newark","Laches","Big Band",1923,"awesome");
        compositionRepository.save(comp);
        return compositionRepository.findAll();

    }



}
