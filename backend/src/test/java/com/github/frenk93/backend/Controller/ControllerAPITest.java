package com.github.frenk93.backend.Controller;

import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Model.SingleWord;
import com.github.frenk93.backend.Repo.Repo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ControllerAPITest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Repo testRepo;

    @Test
    void test_getAllEntries() throws Exception {
        //GIVEN

        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
[]
"""));

        //THEN
    }

    @DirtiesContext
    @Test
    void test_getEntryByInputSearch() throws Exception {
        SingleWord word1 = new SingleWord("Kaufmann", "tregtar", "Substantiv", "Maskulin", "tregtaret");
        Entry entry1 = new Entry(word1, new String []{"testwert", "WertTest"}, "Das ist ein Satz"  );

        testRepo.save(entry1);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/Kaufmann"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                
                                 {
                                   "word": {
                                                    "input": "Kaufmann",
                                                    "translatedWord": "tregtar",
                                                    "wortart": "Substantiv",
                                                    "genus": "Maskulin",
                                                    "pluralform": "tregtaret"
                                                },
                                                "synonyme": ["testwert", "WertTest"],
                                                "beispielsatz": "Das ist ein Satz"
                                 }
                                
                                """
                ));
    }




    }







