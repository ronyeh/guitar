export function showInfo() {
    console.log("This library will teach you the basics of guitar.");
}

const Tunings = {
    Standard: ['E', 'A', 'D', 'G', 'B', 'E'],
    DropD: ['D', 'A', 'D', 'G', 'B', 'E'],
    OpenD: ['D', 'A', 'D', 'F#', 'A', 'D'],
    DropC: ['C', 'G', 'C', 'F', 'A', 'D'],
    OpenC: ['C', 'G', 'C', 'G', 'C', 'E'],
    OpenG: ['D', 'G', 'D', 'G', 'B', 'D'],
    DropB: ['B', 'Gb', 'B', 'E', 'Ab', 'Db'],
    OpenE: ['E', 'B', 'E', 'G#', 'B', 'E'],
    DropA: ['A', 'E', 'A', 'D', 'F#', 'B'],
};

export function showTunings() {
    console.log(Tunings);
}