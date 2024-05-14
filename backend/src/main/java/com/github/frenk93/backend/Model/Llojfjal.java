package com.github.frenk93.backend.Model;

public enum Llojfjal {
    EMRI("U+O0E"+"mri"),
    FOLJA("folja"),
    MBIEMRI("mbiëmer"),
    NDAJFOLJA("ndajfolja"),
    PEREMRI("perëmer"),
    PARAFJALA("parafjala"),
    LIDHEZA("lidhëza"),
    NUMERORI("numërori"),
    PASTHIRMA("pasthirma");

    private final String klein;

    private Llojfjal(String klein) {
        this.klein = klein;
    }

    public String getKlein() {
        return klein;
    }
}
