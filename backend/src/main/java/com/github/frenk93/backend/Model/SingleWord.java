package com.github.frenk93.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


public record SingleWord(
        String input,
        String translatedWord,
        String wortart,
        String genus,
        String pluralform
) {
}
