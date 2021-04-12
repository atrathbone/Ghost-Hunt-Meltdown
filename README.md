# Ghost Hunt Meltdown:

An in-browser game built using p5js for a week-long project as part of a Web Development course in April 2021.

## Description:
A grid based stealth game where you control a man trying to recover his Vase collection without being seen by ghosts!

Players have to navigate various levels populated with obstacles and haunted by ghosts. Each level has a door which the player must reach after collecting a vase. Boxes block player movement but do not hide them from the ghosts, whereas plants give them somewhere to hide.
>There are three ghost types:
>>Normal Ghosts- which stand still and look along either the x or y axis.
>>Super Ghosts- which move left and right, or up and down.
>>Demonic Ghosts- which teleport at random to various spawn points dotted around the level.

## Level Editor-

The game levels are stored in 2dimensional arrays like so:

```javascript
[
  ["o", "b", "b", "sr", "gr", "b", "p", "b", "dl", "p"],
  ["o", "b", "o", "o", "o", "o", "o", "o", "o", "b"],
  ["o", "p", "o", "o", "p", "b", "p", "b", "o", "b"],
  ["o", "p", "o", "o", "o", "o", "o", "b", "o", "b"],
  ["o", "b", "p", "o", "v", "b", "ds", "b", "o", "b"],
  ["o", "gc", "o", "o", "p", "b", "o", "b", "o", "gc"],
  ["o", "b", "dm", "o", "o", "o", "o", "b", "o", "b"],
  ["o", "p", "b", "p", "b", "b", "b", "b", "o", "b"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "b"],
  ["b", "b", "b", "gr", "p", "b", "gr", "dm", "b", "b"],
];
//legend:
//dr,dl,dt,db: a door placed either right, left, top or bottom. 
//b: box.
//p: plant.
//v: vase. 
//gr,gc: a normal ghost looking down either rows or columns.
//sr,sc: a super ghost looking down either rows or columns. 
//dm: a spawn point for demonic ghosts. 
//ds: a demonic ghost. (this should be placed in any available empty square
//and will automatically spawn in the spawn point first loaded by the level loader.)
```
which can be inserted in the levelList array in levels.js to be loaded in sequence within the game. 
(please note that each level needs to contain a door and a vase, and that the player will always spawn in the same position)


all artwork art work and music made by Alex Rathbone. 