package com.github.frenk93.backend.Model;

import org.springframework.data.annotation.Id;

public record Flashcard(
        @Id
        String _id,
        SingleWord word,
        String[] synonyme,
        String beispielsatz
) {
}
