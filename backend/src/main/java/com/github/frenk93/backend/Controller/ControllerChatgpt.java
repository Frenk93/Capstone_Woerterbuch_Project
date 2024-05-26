package com.github.frenk93.backend.Controller;

import com.github.frenk93.backend.Model.ChatGPTRequest;
import com.github.frenk93.backend.Model.ChatGPTResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
public class ControllerChatgpt {
    private final RestClient restClient;


    public ControllerChatgpt (@Value("${CHAT_GPT}") String apiKey) {
        this.restClient = RestClient.builder()
                .baseUrl("https://api.openai.com/v1/chat/completions")
                .defaultHeader("Authorization", "Bearer " + apiKey)
                .build();
    }

    @PostMapping()
    public String summarize(@RequestBody String content) {
        ChatGPTResponse response = restClient.post()
                .body(new ChatGPTRequest(content))
                .retrieve()
                .body(ChatGPTResponse.class);

        return response.text();
    }

}
