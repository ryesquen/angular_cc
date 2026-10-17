/**
 * Fase 2.3 — Capacidad `fly()` separada de las demás capacidades.
 * Los interfaces de capacidad permiten que una clase implemente
 * solo lo que realmente hace (Open/Closed + segregación de interfaces).
 */
export interface Flyable {
  fly(): void;
}
