import { Football } from "./football";

export class PhysicsEngine {
  gravity: number;

  constructor(gravity = 1) {
    this.gravity = gravity;
  }

  applyPhisics(football: Football) {
    football.velocityY += this.gravity;
    football.updatePosition();
  }
}
