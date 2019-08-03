// OBJECT LITERALS - Used to define object

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw in object literals');
    }
};

circle.draw();

// FACTORIES - Used in case of one or more methods are included in the Object

function createCircle(radius){

    return {
        radius,
        draw: function(){
            console.log('draw in factories');
        }
    };

};

const circle2 = createCircle(5);
circle2.draw();
console.log(circle2.radius);


// CONSTRUCTOR FUNCTION - Naming convention first letter uppercase

function Circle3(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw in constructor')
    }
}

const anotherCircle = new Circle3(1);
