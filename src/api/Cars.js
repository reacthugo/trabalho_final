import cars from "./bmwCars-data.json";

export class Cars {

    static getModels(){
        return new Promise((resolve, reject) => {
            const models = cars.models;

            if(models) {
                resolve(models);
            } else {
                reject();
            }
        });
    }

    static getVersionsByModel(idModel){
        return new Promise((resolve, reject) => {
            const versions = cars.versions.filter(v => v.idModel === parseInt(idModel));

            if(versions) {
                resolve(versions);
            } else {
                reject();
            }
        });
    }

    static getColorsByVersion(idVersion){
        return new Promise((resolve, reject) => {
            const colors = cars.colors.filter(color => color.idsVersions.find(v => v === parseInt(idVersion)));

            if(colors) {
                resolve(colors);
            } else {
                reject();
            }
        });
    }

    static getOptionalsByVersion(idVersion){
        return new Promise((resolve, reject) => {
            const optionals = cars.optionals.filter(color => color.idsVersions.find(v => v === parseInt(idVersion)));

            if(optionals) {
                resolve(optionals);
            } else {
                reject();
            }
        });
    }
}