package com.github.frenk93.backend.Model;

import java.util.List;

public record ChatGPTRequest(
        String model,
        List<ChatGPTMessage> messages
) {
}
