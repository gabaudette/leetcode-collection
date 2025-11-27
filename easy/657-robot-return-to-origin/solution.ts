type Vector2 = {
  x: number;
  y: number;
};

function judgeCircle(moves: string): boolean {
  let currentPosition: Vector2 = { x: 0, y: 0 };
  for (const move of moves) {
    switch (move) {
      case "U":
        currentPosition = moveUp(currentPosition);
        break;
      case "D":
        currentPosition = moveDown(currentPosition);
        break;
      case "L":
        currentPosition = moveLeft(currentPosition);
        break;
      case "R":
        currentPosition = moveRight(currentPosition);
        break;
    }
  }

  return isAtOrigin(currentPosition);
}

function moveUp(position: Vector2): Vector2 {
  return { x: position.x, y: position.y + 1 };
}

function moveDown(position: Vector2): Vector2 {
  return { x: position.x, y: position.y - 1 };
}

function moveLeft(position: Vector2): Vector2 {
  return { x: position.x - 1, y: position.y };
}

function moveRight(position: Vector2): Vector2 {
  return { x: position.x + 1, y: position.y };
}

function isAtOrigin(position: Vector2): boolean {
  return position.x === 0 && position.y === 0;
}
