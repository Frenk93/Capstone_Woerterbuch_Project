package com.github.frenk93.backend.Model;

public record SingleWord(
        String word,
        Wortarten wortart,
        Genus genus,
        Numerus numerus
) {
}
