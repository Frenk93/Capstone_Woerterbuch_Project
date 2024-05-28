package com.github.frenk93.backend.Controller;

import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Model.Genus;
import com.github.frenk93.backend.Model.SingleWord;
import com.github.frenk93.backend.Model.Wortarten;
import com.github.frenk93.backend.Repo.Repo;
import com.github.frenk93.backend.Service.ServiceAPI;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ControllerAPI {
   private final ServiceAPI service;


    @GetMapping()
    public List<Entry> getAllEntries() {
        //Ich brauche nicht alle Entries, nur die, die dem Suchbegriff ähneln..
        return service.findAllEntries();
    }

    @GetMapping("/{input}")
    public Entry getEntryBySearchInput(@PathVariable String input){
        return service.getEntryByWordName(input);

    }

    @PostMapping
    public void createEntry(@RequestBody Entry entry) {
        service.setEntry(entry);
    }

    @DeleteMapping("/{input}")
    public void deleteEntry(@PathVariable String input) {
        service.deleteEntry(input);
    }

    @PutMapping("/update")
    public void updateEntry(@RequestBody Entry entry) {
        service.updateData(entry);
    }










}
