/** Maak een klant aan Karel Kleintjes (email: karel.kleintjes@example.com)
 * Je maakt onderstaande facturen aan   
 * Factuur("F2025001", "2025-06-01", 250.0)
 * Factuur("F2025002", "2025-03-13", 120.0, true)
 * bovenstaande regels maken 2 facturen aan.
 * Koppel deze facturen aan Karel Kleintjes als klant.
 *
 * Print je zijn facturen uit met de method: printFacturen() --> staat al in de code
 * output MOET zoals onderstaande zijn:
 *     Facturen voor Karel kleintjes:
 *      Factuur F2025001: €250.00 - Openstaand
 *      Factuur F2025002: €120.00 - Betaald
 *
 * Als laatste zorg je dat dit werkt.
 * console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
 * output: Openstaand totaal: 250
 */

import { Factuur, Klant } from "./Admin.js";

// nieuwe klant
const klant1 = new Klant(1, "Karel Kleintjes", "karel.kleintjes@example.com")

// nieuwe facturen
const factuur1 = new Factuur("F2025001", "2025-06-01", 250.0)
const factuur2 = new Factuur("F2025002", "2025-03-13", 120.0, true)

klant1.voegFactuurToe(factuur1)
klant1.voegFactuurToe(factuur2)

// console.log(klant1.facturen); // test om te zien als de facturen bij karel kleintjes aangesloten zijn

klant1.printFacturen();
console.log(factuur1.toString());
console.log(factuur2.toString());


console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
