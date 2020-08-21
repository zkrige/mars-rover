import Grid from "../grid";
import Rover from "../rover";
import {describe, it} from "@jest/globals";

describe('Create Grid', function(){
    it('should validate that grid size is numeric', () => {
        const grid = new Grid("A B")
        expect(!!grid).toBe(true)
    })

    it('should create a grid with a given size', () => {
        const grid = new Grid("5 5")
        expect(grid.length).toBe(6)
        expect(grid.width).toBe(6)
    })
})

describe('Rover tests', function(){
    it('should handle a given starting position', () => {
        const rover = new Rover("2 2 N")
        expect(rover.currentPos.x).toBe(2)
        expect(rover.currentPos.y).toBe(2)
        expect(rover.direction).toBe("N")
    })

    it('should move rover 1 block north', () => {
        const rover = new Rover("2 2 N")
        const grid = new Grid("5 5")
        rover.move(grid)
        expect(rover.currentPos.x).toBe(2)
        expect(rover.currentPos.y).toBe(3)
        expect(rover.direction).toBe("N")
    })

    it('should turn rover left', () => {
        const rover = new Rover("2 2 N")
        rover.turn("L")
        expect(rover.direction).toBe("W")
    })

    it('should turn rover right', () => {
        const rover = new Rover("2 2 N")
        rover.turn("R")
        expect(rover.direction).toBe("E")
    })

    it('should not go north off grid', () => {
        const rover = new Rover("5 5 N")
        const grid = new Grid("5 5")
        rover.move(grid)
        expect(rover.currentPos.x).toBe(5)
        expect(rover.currentPos.y).toBe(5)
    })

    it('should not go east off grid', () => {
        const rover = new Rover("5 5 E")
        const grid = new Grid("5 5")
        rover.move(grid)
        expect(rover.currentPos.x).toBe(5)
        expect(rover.currentPos.y).toBe(5)
    })

    it ('should parse a navigation string', () => {
        const rover = new Rover("1 2 N")
        const grid = new Grid("5 5")
        rover.navigate("LMLMLMLMM", grid)
        expect(rover.currentPos.x).toBe(1)
        expect(rover.currentPos.y).toBe(3)
        expect(rover.direction).toBe("N")
    })

    it ('should print its current location correction', () => {
        const rover = new Rover("1 2 N")
        const grid = new Grid("5 5")
        rover.navigate("LMLMLMLMM", grid)
        expect(rover.toString()).toBe("1 3 N")
    })

    it ('should print its current location correction', () => {
        const rover = new Rover("3 3 E")
        const grid = new Grid("5 5")
        rover.navigate("MMRMMRMRRM", grid)
        expect(rover.toString()).toBe("5 1 E")
    })
})

