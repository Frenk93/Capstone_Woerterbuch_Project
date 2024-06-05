package com.github.frenk93.backend.Service;

import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Model.Flashcard;
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

    public List<Flashcard> findAllEntries(){
        List<Flashcard> list = repoFlashcards.findAll();
        Collections.shuffle(list);
        return list;
    }

    public Flashcard findEntryById(String id) {
        Optional<Flashcard> entry = repoFlashcards.findById(id);
        return entry.orElse(null);
    }

    public void setEntry(Flashcard entry) {
        repoFlashcards.save(entry);
    }

    public void deleteEntry(String id){
        Optional<Flashcard> entry = repoFlashcards.findById(id);
        entry.ifPresent(repoFlashcards::delete);
    }

}
