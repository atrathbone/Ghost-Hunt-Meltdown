Ghost Hunt Meltdown:

Description: 
A grid based puzzle/ dungeon crawl game where you control a man trying to scare ghosts away from his house without getting seen. 

The player will be able to move the man with the arrow keys to change the direction he is facing and then press the space bar to throw water baloons at the ghosts. If the player walks in to the line of sight (any square in front of the direction the ghost is facing) of the ghosts the level restarts.

The levels will be populated with walls, ghosts and the player and will stored as two dimensional arrays of characters which can be interpreted by the game class. 

the graphical assets will be structured as tiles which slot together in a grid. 


mvp:
-tiled game scene constructed dynamically from tiles.
-walls with collision detection.
-basic enemy AI (ghosts have line of sight).
-projectiles which shoot forward and stop at the point of collision. 


nice to have:
-other graphics on the page outside of the canvas (eg, a score counter, level selector).
-multiple levels.
-loading screen.
-animated sprites.
-implement pathfinding algorithm. 
 




main---game---other individual objects

classes: 
-game---renders everything---
-levels (stored as 2d arrays)---containing characters detailing what is rendered in each square at load time. 
-wall
-player
-enemy
-projectile