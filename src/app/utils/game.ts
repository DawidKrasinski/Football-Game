import { Football } from "./football";
import { PhysicsEngine } from "./physics-engine";

export class Game {
  football: Football;
  physicsEngine: PhysicsEngine;
  score: number;
  bestScore: number;

  constructor() {
    this.football = new Football(500, 500);
    this.physicsEngine = new PhysicsEngine();
    this.score = 0;
    this.bestScore = 0;
  }

  kickFootball() {
    this.score++;
    this.football.velocityY = -20;
    this.football.velocityX = Math.random() * 20 - 10;
    console.log(this.football.velocityX);
  }

  restartGame() {
    this.football.positionX = 500;
    this.football.positionY = 500;
    this.football.velocityX = 0;
    this.football.velocityY = 0;
    if (this.score > this.bestScore) this.bestScore = this.score;
    this.score = 0;
  }

  updateGame() {
    if (this.football.positionY > 1200) this.restartGame();
    if (this.football.positionX <= 1000) this.football.velocityX *= -1;
    if (this.football.positionX >= 0) this.football.velocityX *= -1;
    if (this.score !== 0) this.physicsEngine.applyPhisics(this.football);
  }
}
