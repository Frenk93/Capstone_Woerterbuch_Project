package com.github.frenk93.backend.Service;


import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Model.Genus;
import com.github.frenk93.backend.Model.SingleWord;
import com.github.frenk93.backend.Model.Wortarten;
import com.github.frenk93.backend.Repo.Repo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ServiceAPI {
    private final Repo repo;



    public List<Entry> findAllEntries(){
        return repo.findAll();
    }

    public Optional<Entry> getEntryByWordName(String word) {
        if (word.isEmpty() && !repo.findAll().contains(word)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return repo.findById(word);

    }

    public void setEntry(Entry entry){
        if(!repo.findAll().contains(entry)){
            repo.save(entry);
        }
        repo.save(entry);
    }





}









