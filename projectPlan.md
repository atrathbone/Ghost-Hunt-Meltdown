project 1 game ideas:

mvp:
-grid scene
-walls with collision detection
-turn based system
-basic AI enemy
-timed explosions


nice to have:
-mini ghost house which reacts on death of ghost
-multiple levels
-multiple item types
-animated sprites
-implement pathfinding algorithm 

structure: 

classes: 
-games-turnorder
-board
-player
-enemy
-projectile


RETHINK--

structure 

main---game---other individual objects

classes: 
-game---renders everything---
-levels (stored as 2d arrays)---containing characters detailing what is rendered in each square at load time. 
-wall
-player
-enemy
-projectile