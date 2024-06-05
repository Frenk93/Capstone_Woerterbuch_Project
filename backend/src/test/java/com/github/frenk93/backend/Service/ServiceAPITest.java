package com.github.frenk93.backend.Service;

import com.github.frenk93.backend.Model.Entry;
import com.github.frenk93.backend.Model.SingleWord;
import com.github.frenk93.backend.Repo.Repo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ServiceAPITest {
   private Repo mockRepo = mock(Repo.class);
   private ServiceAPI testService = new ServiceAPI(mockRepo);



    @Test
    void findAllEntries_Test(){
        //GIVEN
        SingleWord word1 = new SingleWord("Kaufmann", "tregtar", "Substantiv", "Maskulin", "tregtaret");
        SingleWord word2 = new SingleWord("Kauffrau", "tregtare", "Substantiv", "Feminin", "tregtare");
        Entry entry1 = new Entry("12" , word1, new String []{"testwert", "WertTest"}, "Das ist ein Satz"  );
        Entry entry2 = new Entry( "12", word2, new String []{"test", "WertTestTestTest"}, "Das ist ein zweiter Satz");
        List <Entry> list = List.of(entry1, entry2);
        mockRepo.saveAll(list);

        when(mockRepo.findAll()).thenReturn(list);

        //WHEN
        List<Entry> actual = testService.findAllEntries();

        //THEN
        verify(mockRepo).findAll();
        assertEquals(list, actual);


    }

    @Test
    void test_getEntryByWordName(){
        //GIVEN
        SingleWord word1 = new SingleWord("Kaufmann", "tregtar", "Substantiv", "Maskulin", "tregtaret");
        Entry entry1 = new Entry("12", word1, new String []{"testwert", "WertTest"}, "Das ist ein Satz"  );

        //when(mockRepo.findByWord("Kaufmann")).thenReturn(Optional.of(entry1));

        //WHEN
        Entry actual = testService.getEntryByWordName("Kaufmann");

        //THEN
       // verify(mockRepo).findByWord("Kaufmann");
        assertEquals(entry1, actual);


    }

    @Test
    void test_SetEntry(){
        //GIVEN
        SingleWord word1 = new SingleWord("Kaufmann", "tregtar", "Substantiv", "Maskulin", "tregtaret");
        Entry entry1 = new Entry( "12", word1, new String []{"testwert", "WertTest"}, "Das ist ein Satz"  );

        //when(testService.setEntry(entry1)).t

        testService.setEntry(entry1);

        verify(mockRepo).save(entry1);
    }


}