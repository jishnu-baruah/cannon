class Base {
    constructor(x, y, width, height, angle) {
        var options = {
            'density': 1.5,
            'friction': 3.0,
            'restitution': 0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill(0);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}