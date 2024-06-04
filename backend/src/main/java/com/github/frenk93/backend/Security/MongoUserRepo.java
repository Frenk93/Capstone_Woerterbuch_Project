package com.github.frenk93.backend.Security;

import com.github.frenk93.backend.Model.MongoUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MongoUserRepo extends MongoRepository<MongoUser, String> {

    Optional<MongoUser> findByUsername(String username);
}
