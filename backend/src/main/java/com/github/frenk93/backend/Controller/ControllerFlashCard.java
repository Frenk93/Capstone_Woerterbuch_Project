package com.github.frenk93.backend.Controller;

import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Service.ServiceAPI;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flashcards")
@RequiredArgsConstructor
public class ControllerFlashCard {
    private final ServiceAPI serviceFlash;

    @GetMapping()
    public List<Entry> getAllEntries(){
        return serviceFlash.findAllEntries();
    }

    @PostMapping()
    public void createEntry(@RequestBody Entry entry) {
        serviceFlash.setEntry(entry);
    }

    @DeleteMapping("/{id}")
    public void deleteEntry(@PathVariable String id) {
        serviceFlash.deleteEntry(id);
    }



}
