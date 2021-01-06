var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
        direction: "N",
        location: { x: 0, y: 0 }
    }
    ///va vers la gauche
function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
}
///va vers la droite 
function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
    }

}

/// avancer 
function moveForward(rover) {
    //Variables
    var locationX = rover.location.x;
    var locationY = rover.location.y;
    var roverDir = rover.direction;
    var roverInfoConsole = `Current rover position is x:${locationX} y:${locationY}
                  Current rover direction is ${roverDir} `;
    // Moves  
    if ((roverDir === "N" && locationY <= 0) ||
        (roverDir === "E" && locationX >= 9) ||
        (roverDir === "S" && locationY >= 9) ||
        (roverDir === "W" && locationX <= 0)) {

        console.log(`Cannot move in that direction. The rover would move to a restricted area.
                  ${roverInfoConsole}`);

        //allowed moves
        //North
    } else if (roverDir === "N" && locationY <= 9) {
        rover.location.y = rover.location.y - 1;
        console.log(`moveForward was called. 
                     Current rover position is x:${locationX} y:${locationY}
                  Current rover direction is ${roverDir} `);
        //East
    } else if (roverDir === "E" && locationX < 9) {
        rover.location.x = rover.location.x + 1;
        console.log(`Current rover position is x:${locationX} y:${locationY}
                  Current rover direction is ${roverDir} `);
        //South
    } else if (roverDir === "S" && locationY < 9) {
        rover.location.y = rover.location.y + 1;
        console.log(`moveForward was called. 
                     Current rover position is x:${locationX} y:${locationY}
                  Current rover direction is ${roverDir} `);
        //West
    } else if (roverDir === "W" && locationX < 9) {
        rover.location.x = rover.location.x - 1;
        console.log(`moveForward was called. 
                     Current rover position is x:${locationX} y:${locationY}
                  Current rover direction is ${roverDir} `);
    }
};
turnRight(rover)
console.log(rover)
moveForward(rover)
console.log(rover)