export class Football {
  positionX: number;
  positionY: number;
  velocityX: number;
  velocityY: number;
  radius: number;

  constructor(startX: number, startY: number, radius = 50) {
    this.positionX = startX;
    this.positionY = startY;
    this.radius = radius;
    this.velocityX = 0;
    this.velocityY = 0;
  }

  updatePosition() {
    this.positionX += this.velocityX;
    this.positionY += this.velocityY;
  }
}
