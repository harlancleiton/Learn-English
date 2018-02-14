export class HeartModel {

    //private pathCurrent: string = this.displayHeart()

    constructor(
        public isFull: boolean = true,
        public pathHeartFull: string = '/assets/heart_full.png',
        public pathHeartEmpty: string = '/assets/heart_empty.png'
    ) { }

    public displayHeart(): string {
        if (this.isFull){
            console.log('Display heart full')
            return this.pathHeartFull
        }
        else {
            console.log('Display heart empty')
            return this.pathHeartEmpty
        }
    }
}