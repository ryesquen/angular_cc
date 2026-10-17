/**
 * Fase 2.3 — Liskov (interfaz base).
 * Este archivo documenta la INTERFAZ para entender la regla:
 * un subtipo debe poder sustituirse por su interfaz sin romper
 * el programa. La clase que viola esa regla no forma parte del
 * build (ver `bird.violating.ts` en la explicación de este tema).
 */
export interface Bird {
  name: string;
  fly(): void; // todos los pájaros vuelan
}
