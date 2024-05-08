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


    @GetMapping("/{input}")
    public Entry getEntryBySearchInput(@PathVariable String input){
      return service.getEntryByWordName(input);

    }

    @GetMapping()
    public List<Entry> getAllEntries() {
        return service.findAllEntries();
    }

    @PostMapping
    public void createEntry(@RequestBody Entry entry) {
        service.setEntry(entry);
    }





}
