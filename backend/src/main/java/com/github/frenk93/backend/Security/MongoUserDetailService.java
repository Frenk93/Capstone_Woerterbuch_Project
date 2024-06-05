package com.github.frenk93.backend.Security;

import com.github.frenk93.backend.Model.MongoUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class MongoUserDetailService implements UserDetailsService {
    private final MongoUserRepo repo;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser user = repo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User: " + username + " not found"));
        return new User(user.username(), user.password(), Collections.emptyList());
    }
}
