import * as mongoose from "mongoose";

export class DbIntance {
    static db: any;

    static async getinstance() : Promise<void> {
        if (!this.db)
            this.db = await mongoose.connect("mongodb://127.0.0.1:27017/dashboard", (err: any) => {
                if (err) {
                  console.log(err.message);
                } else {
                  console.log("Successfully Connected!");
                }
              });
        return this.db
    }
}