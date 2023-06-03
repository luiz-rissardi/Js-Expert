import TshirtTestDataBuilder from "../TestDataBiulders/tshirt-testDataBiulder.js";


export default class TshirtMotherObject {

    static withValidData(){
        return TshirtTestDataBuilder
            .anTshirt()
            .build();
    }

    static withIvalidColor() {
        return TshirtTestDataBuilder
            .anTshirt()
            .withInvalidColor()
            .build();
    }

    static withInavlidPirce(){
        return TshirtTestDataBuilder
            .anTshirt()
            .withInvalidPrice()
            .build();
    }

    static withInvalidSize(){
        return TshirtTestDataBuilder
            .anTshirt()
            .withInvalidSize()
            .build();
    }

    static withInvalidMarca(){
        return TshirtTestDataBuilder
            .anTshirt()
            .withInvalidsetMarca()
            .build();
    }
}