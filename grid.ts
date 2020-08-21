export default class Grid {
    length: number
    width: number

    /**
     * create a grid with top right position as given size
     * eg: 5 5 will create a grid with bottom left 0,0 and top right 5,5
     * @param size
     */
    constructor(size: String) {
        const params = size.split(" ")
        this.length = parseInt(params[0]) + 1
        this.width = parseInt(params[1]) + 1
    }
}
/*
[4,0] [4,1] [4,2] [4,3] [4,4]
[3,0] [3,1] [3,2] [3,3] [3,4]
[2,0] [2,1] [2,2] [2,3] [2,4]
[1,0] [1,1] [1,2] [1,3] [1,4]
[0,0] [0,1] [0,2] [0,3] [0,4]

1 2 N
LMLMLMLMM

*/

