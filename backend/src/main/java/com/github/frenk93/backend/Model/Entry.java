package com.github.frenk93.backend.Model;

import org.springframework.data.annotation.Id;

public record Entry(
        SingleWord word,
        String[] synonyme,
        String beispielsatz


) {
}
