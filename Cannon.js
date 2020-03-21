class Cannon {
    constructor(x, y, width) {
        var options = {
            isStatic: true
        }
        this.bodyBase = Bodies.rectangle(x, y, width, 100, options);
        this.width = width;
        this.height = 100;

        World.add(world, this.bodyBase);
    }
    display() {
        var pos = this.bodyBase.position;
        rectMode(CENTER);
        stroke(0);
        strokeWeight(2);
        fill(255);
        rect(pos.x + 55, pos.y - 100, (this.width / 2) + 30, 40);
        ellipse(pos.x, pos.y - 34, this.width, this.height + 70)
        rect(pos.x, pos.y, this.width, this.height);
        line(pos.x - (this.width / 2), pos.y, pos.x + (this.width / 2), pos.y)
    }
}