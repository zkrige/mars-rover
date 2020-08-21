import coord from "./coord";
import Grid from "./grid";

export default class Rover {
    currentPos: coord
    direction: string

    /**
     * configure a rover with a starting position
     * @param startPos
     */
    constructor(startPos: string) {
        const parts = startPos.split(" ")
        const x = parseInt(parts[0])
        const y = parseInt(parts[1])
        const dir = parts[2]
        this.currentPos = new coord(x, y)
        this.direction = dir
    }

    /**
     * Turns the rover to a new compass heading based on a given LEFT or RIGHT command
     * @param direction - one of {L,R}
     */
    turn(direction: string) {
        switch (this.direction) {
            case "N":
                if (direction === "L") {
                    this.direction = "W"
                }
                if (direction === "R") {
                    this.direction = "E"
                }
                break;
            case "E":
                if (direction === "L") {
                    this.direction = "N"
                }
                if (direction === "R") {
                    this.direction = "S"
                }
                break;
            case "S":
                if (direction === "L") {
                    this.direction = "E"
                }
                if (direction === "R") {
                    this.direction = "W"
                }
                break;
            case "W":
                if (direction === "L") {
                    this.direction = "S"
                }
                if (direction === "R") {
                    this.direction = "N"
                }
                break;
            default:
                //handle invalid direction
                break;
        }
    }

    /**
     * moves the rover forward one block in its current direction
     * @param grid - the grid we've moving on
     */
    move(grid: Grid) {
        switch (this.direction) {
            case "N":
                if (this.currentPos.y < grid.length - 1) {
                    this.currentPos.y++
                }
                break;
            case "E":
                if (this.currentPos.x < grid.width - 1) {
                    this.currentPos.x++
                }
                break;
            case "S":
                if (this.currentPos.y > 0) {
                    this.currentPos.y--
                }
                break;
            case "W":
                if (this.currentPos.x > 0) {
                    this.currentPos.x--
                }
                break;
            default:
                //handle invalid direction
                break;
        }
    }

    /**
     * navigates a rover on a given path and grid
     * @param path
     * @param grid
     */
    navigate(path: string, grid: Grid) {
        const instructions = path.split("")
        for (let i = 0; i < instructions.length; i++) {
            const instruction = instructions[i]
            switch (instruction) {
                case "L":
                case "R":
                    this.turn(instruction)
                    break;
                case "M":
                    this.move(grid)
                    break;
                default:
                    throw "invalid instruction:" + instruction
            }
        }
    }

    /**
     * prints the current position in expected format
     */
    toString() {
        return `${this.currentPos.x} ${this.currentPos.y} ${this.direction}`
    }
}
