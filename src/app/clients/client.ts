
export class Client {
    constructor(
        public id: number = 0,
        public idclient?: number,
        public email?: string,
        public city?: string,
        public description?: string,
        public created_on?: Date,
        public updated_on?: Date
    ) { }
}
