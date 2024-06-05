package com.github.frenk93.backend.Model;

import java.util.List;

public record ChatGPTResponse(
        List<ChatGPTChoice> choices
) {
    public String text(){
        return choices.getFirst().message().content();
    }
}
