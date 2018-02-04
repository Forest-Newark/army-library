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

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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

    @RequestMapping(value= "/compositions", produces = "application/json")
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
    public void uploadFileHandler(@RequestParam("File") MultipartFile file,@RequestParam("User") String user) throws IOException {

        System.out.println("file uploaded");

        Reader in = new FileReader(fileService.convert(file));

        Iterable<CSVRecord> records = CSVFormat.RFC4180.withHeader("Catagory", "libnum", "Title","Composer","Arranger","Copyright","Ensemble","Notes").parse(in);
        for (CSVRecord record : records) {
            Composition composition = new Composition(
                    null,
                    record.get("Catagory"),
                    record.get("libnum"),
                    record.get("Title"),
                    record.get("Composer"),
                    record.get("Arranger"),
                    record.get("Ensemble"),
                    record.get("Copyright"),
                    record.get("Notes"),
                    null,
                    user
            );
            compositionRepository.save(composition);
        }
    }

    @RequestMapping(value="/downloadCSV", method = RequestMethod.GET)
    public void downloadCSV(HttpServletResponse response) throws IOException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        response.setContentType("application/ms-excel"); 
        response.setHeader("Content-Disposition", "attachment; filename=Band-Library-("+ LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("yyyy-MMM-dd"))+").csv");
        try {
            // Write the header line
            OutputStream out = response.getOutputStream();
            String header = "Catagory,libnum,Title,Composer,Arranger,Ensemble,Copyright,Notes,URL\n";
            out.write(header.getBytes());
            // Write the content
            List<Composition> compositions = compositionRepository.findAll();
            for (Composition comp: compositions) {
                String line= comp.getCatagory() + "," +
                        comp.getLibraryNumber() + "," +
                        comp.getTitle() + "," +
                        comp.getComposer() + "," +
                        comp.getArranger() + "," +
                        comp.getEnsemble() + "," +
                        comp.getCopyright() + "," +
                        comp.getNotes() + "," +
                        comp.getUrl() + "," +
                        "\n";
                out.write(line.toString().getBytes());
            }
            out.flush();
        } catch (Exception e) {

        }
    }



}
