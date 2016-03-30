Camus Tristan
Cojez Arnaud

Q3.
  Car le sol n'a pas de vertex ?
  Et que si on calcule par pixels le sol est éclairé partout.

P3.E1.Q1.
  L'image est fixe car sa projection l'image suit la caméra.
  De plus les coordonnées de texture vont de 0 à 1, donc n'aparaissent que dans le quart supérieur droit de l'écran (le repère allant de -1 à 1).
  On ne voit pas la texture dans le fond de la scène car l'image est projetée sur des surface, le fond de la scène n'a pas de surface.

P3.E1.Q4.
  Les pixels en coordonnées négatives cherchent donc dans la texture les pixels avec des coordonnées de 0 à 1.

P3.E1.Q5.
  * Chaque objet a son propre repère. Donc ils ne partagent pas la même position.
  * L'image est projetée par rapport à partir de la caméra. Ce test est intéressant car il faut projeter l'image à partir du projecteur, donc il faut utiliser le même principe mais avec la position du projecteur.

Doit contenir :
- ce que vous n'avez pas fait (et pourquoi). Précisez explicitement "tout à été fait et fonctionne parfaitement" si c'est le cas.
- difficultés rencontrées.
- commentaires éventuels sur le TP (points à éclaircir, longueur du sujet, etc).
