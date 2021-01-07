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
        location: { x: 0, y: 0 },
        //travelLog: [],
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
    var roverInfoConsole = `Current rover position is x:${locationX} y:${locationY}  Current rover direction is ${roverDir} `;
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
        console.log(roverInfoConsole);
        //East
    } else if (roverDir === "E" && locationX < 9) {
        rover.location.x = rover.location.x + 1;
        console.log(roverInfoConsole);
        //South
    } else if (roverDir === "S" && locationY < 9) {
        rover.location.y = rover.location.y + 1;
        console.log(roverInfoConsole);
        //West
    } else if (roverDir === "W" && locationX < 9) {
        rover.location.x = rover.location.x - 1;
        console.log(roverInfoConsole);
    }
};


function pilotRover(string) {
    var commande = string;
    for (i = 0; i < commande.length; i++) {
        if (commande.charAt(i) === "f") {
            moveForward(rover)
            console.log(rover)
        } else if (commande.charAt(i) === "l") {
            turnLeft(rover)
            console.log(rover)
        } else if (commande.charAt(i) === "r") {
            turnRight(rover)
            console.log(rover)
        } else {
            console.log("This not a command");
        }


    }
}


pilotRover("rfs")