package com.github.frenk93.backend.Model;

public enum Genus {
    MASKULIN("Maskulin"),
    FEMININ("Feminin"),
    NEUTRUM("Neutrum");

    private final String klein;

    private Genus(String klein) {
        this.klein = klein;
    }

    public String getKlein() {
        return klein;
    }
}
