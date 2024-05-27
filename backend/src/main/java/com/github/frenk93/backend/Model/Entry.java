package com.github.frenk93.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("entry")
public record Entry(
        @Id
        String id,
        SingleWord word,
        String[] synonyme,
        String beispielsatz


) {
}
