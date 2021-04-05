Ghost Hunt Meltdown:

Description: 
A grid based puzzle/ dungeon crawl game where you control a man trying to move around his house without being seen. 

The player will be able to move the man with the arrow keys to change the direction he is facing. If the player walks in to the line of sight (any square in front of the direction the ghost is facing) of the ghosts the level restarts.

The levels will be populated with walls, ghosts and the player and will stored as two dimensional arrays of characters which can be interpreted by the game class. 

the graphical assets will be structured as tiles which slot together in a grid. 


mvp:
-tiled game scene constructed dynamically from tiles.
-walls with collision detection.
-basic enemy AI (ghosts have line of sight).


nice to have:
-other graphics on the page outside of the canvas (eg, a score counter, level selector).
-multiple levels.
-loading screen.
-animated sprites.
-implement pathfinding algorithm. 
 

plan :
-get background and player rendered on screen-DONE
-get player to move-DONE
-constrain the movement within the frame of the image-DONE
-add boxes and dont allow player to walk thorough them -DONE
-add static ghost and mark player as spotted when in line of sight
-allow for boxes to be blocking line of sight
-change fps to 30 and create a frame counter for movement/ animation
-animate sprites
-make ghosts move/change direction facing
-create a fail state for when the player is seen (game should reset)
-create win state for when player reaches the door 
-create a level loader to load different level configurations and wire it up to win state
-add sound
-

 