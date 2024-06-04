package com.github.frenk93.backend.Security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/mongoUser")
public class AdminController {

    @GetMapping
    public String admin() {
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @GetMapping("/me")
    public String getMe2(Principal principal) {
        if(principal != null) {
            return principal.getName();
        }
        return "anonymousUser";
    }

    @PostMapping()
    public String login( ) {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
