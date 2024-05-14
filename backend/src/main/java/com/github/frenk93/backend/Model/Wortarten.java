package com.github.frenk93.backend.Model;

public enum Wortarten {
    SUBSTANTIV("Substantiv"),
    VERB("Verb"),
    ADJEKTIV("Adjektiv"),
    ADVERB("Adverb"),
    PRONOMEN("Pronomen"),
    PRAEPOSITION("Praeposition"),
    KONJUNKTION("Konjunktion"),
    NUMERALE("Numerale"),
    INTERJEKTION("Interjektion"),;

    private final String klein;

    private Wortarten(String klein) {
        this.klein = klein;

    }

   public String getKlein(){
        return this.klein;
   }

}
