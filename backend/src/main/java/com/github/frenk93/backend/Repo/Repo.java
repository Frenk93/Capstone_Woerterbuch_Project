package com.github.frenk93.backend.Repo;

import com.github.frenk93.backend.Model.Entry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Repo extends MongoRepository<Entry, String> {

    @Query("{'word.input': {'$regex': ?0, '$options':'i'} }")
    Optional<Entry> findByWord(String input);



}
