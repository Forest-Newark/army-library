package com.forestnewark.Library.Manager.controller;

import com.forestnewark.Library.Manager.Repository.CompositionRepository;
import com.forestnewark.Library.Manager.bean.Composition;
import com.forestnewark.Library.Manager.service.FileService;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.Collection;
import java.util.List;



/**
 * Created by Forest on 11/25/17.
 */
@org.springframework.web.bind.annotation.RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE, value = "/api")
@CrossOrigin(origins = "*")
public class RestController {


    @Autowired
    CompositionRepository compositionRepository;

    @Autowired
    FileService fileService;


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

    @RequestMapping(value= "/composition", produces = "application/json")
    public @ResponseBody List<Composition> getAllCompositions(){
        return compositionRepository.findAll();
    }




    /**
     * Add New Composition
     * @param composition
     * @return added composition
     */

    @RequestMapping(value="/composition/add", method= RequestMethod.POST)
    public Composition addNewComposition(@RequestBody Composition composition){
        compositionRepository.save(composition);
        return composition;

    }

    /**
     * Edit composition
     * @param composition
     * @return
     */
    @RequestMapping(value="/composition/update", method = RequestMethod.POST)
    public Composition editComposition(@RequestBody Composition composition){
        compositionRepository.save(composition);
        return composition;
    }


    /**
     * Delete Composition
     * @param composition
     * @return
     */
    @RequestMapping(value="/composition/delete", method= RequestMethod.POST)
    public Composition deleteComposition(@RequestBody Composition composition){
        compositionRepository.delete(composition);
        return composition;
    }


    /**
     * Upload CSV File
     * @param file
     * @throws IOException
     */
    @RequestMapping(value = "/submitCSV", method = RequestMethod.POST)
    public void uploadFileHandler(@RequestParam("file") MultipartFile file) throws IOException {


        Reader in = new FileReader(fileService.convert(file));

        Iterable<CSVRecord> records = CSVFormat.RFC4180.withHeader("Catagory", "libnum", "Title","Composer","Arranger","Copyright","Ensemble","Notes").parse(in);
        for (CSVRecord record : records) {
            Composition composition = new Composition(
                    null,
                    record.get("Catagory"),
                    Integer.parseInt(record.get("libnum")),
                    record.get("Title"),
                    record.get("Composer"),
                    record.get("Arranger"),
                    record.get("Ensemble"),
                    Integer.parseInt(record.get("Copyright")),
                    record.get("Notes")
            );
            compositionRepository.save(composition);
        }
    }



}
