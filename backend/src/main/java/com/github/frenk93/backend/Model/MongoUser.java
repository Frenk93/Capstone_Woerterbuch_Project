package com.github.frenk93.backend.Model;

public record MongoUser(
        String id,
        String username,
        String password
) {
}
