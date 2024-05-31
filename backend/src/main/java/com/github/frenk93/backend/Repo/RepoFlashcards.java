package com.github.frenk93.backend.Repo;

import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Model.Flashcard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoFlashcards extends MongoRepository<Flashcard, String> {
}