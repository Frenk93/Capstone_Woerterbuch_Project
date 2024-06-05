package com.github.frenk93.backend.Repo;

import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Model.Flashcard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepoFlashcards extends MongoRepository<Flashcard, String> {
    @Query("{'word.input': {'$regex': ?0, '$options':'i'} }")
    Optional<Flashcard> findFirstByWord(String input);
}
