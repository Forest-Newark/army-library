package com.forestnewark.Library.Manager.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Forest on 11/25/17.
 */
@Entity(name = "Composition")
public class Composition {


    @Id
    @GeneratedValue
    private Integer id;

    @Column
    private String catagory;

    @Column
    private String libraryNumber;

    @Column
    private String title;

    @Column
    private String composer;

    @Column
    private String arranger;

    @Column
    private String ensemble;

    @Column
    private String copyright;

    @Column
    private String notes;

    @Column
    private String url;

    @Column
    private String lastEdit;

    @Column
    private String editedBy;

    public Composition() {
    }

    public Composition(String catagory, String libraryNumber, String title, String composer, String arranger, String ensemble, String copyright, String notes, String url, String lastEdit, String editedBy) {
        this.catagory = catagory;
        this.libraryNumber = libraryNumber;
        this.title = title;
        this.composer = composer;
        this.arranger = arranger;
        this.ensemble = ensemble;
        this.copyright = copyright;
        this.notes = notes;
        this.url = url;
        this.lastEdit = lastEdit;
        this.editedBy = editedBy;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCatagory() {
        return catagory;
    }

    public void setCatagory(String catagory) {
        this.catagory = catagory;
    }

    public String getLibraryNumber() {
        return libraryNumber;
    }

    public void setLibraryNumber(String libraryNumber) {
        this.libraryNumber = libraryNumber;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getComposer() {
        return composer;
    }

    public void setComposer(String composer) {
        this.composer = composer;
    }

    public String getArranger() {
        return arranger;
    }

    public void setArranger(String arranger) {
        this.arranger = arranger;
    }

    public String getEnsemble() {
        return ensemble;
    }

    public void setEnsemble(String ensemble) {
        this.ensemble = ensemble;
    }

    public String getCopyright() {
        return copyright;
    }

    public void setCopyright(String copyright) {
        this.copyright = copyright;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getLastEdit() {
        return lastEdit;
    }

    public void setLastEdit(String lastEdit) {
        this.lastEdit = lastEdit;
    }

    public String getEditedBy() {
        return editedBy;
    }

    public void setEditedBy(String editedBy) {
        this.editedBy = editedBy;
    }
}
