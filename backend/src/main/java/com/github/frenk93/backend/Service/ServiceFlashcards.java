package com.github.frenk93.backend.Service;

import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Repo.RepoFlashcards;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ServiceFlashcards {

    private final RepoFlashcards repoFlashcards;

    public List<Entry> findAllEntries(){
        List<Entry> list = repoFlashcards.findAll();
        Collections.shuffle(list);
        return list;
    }

    public void setEntry(Entry entry) {
        repoFlashcards.save(entry);
    }

    public void deleteEntry(String word){
        Optional<Entry> entry = repoFlashcards.findById(word);
        entry.ifPresent(repoFlashcards::delete);
    }

}
