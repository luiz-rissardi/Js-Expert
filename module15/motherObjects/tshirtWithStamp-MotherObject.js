import TshirtWithStampTestDataBuilder from "../TestDataBiulders/tshirtWithStamp-TesteDataBuilder.js";

export default class TshirtWithStampMotherObject{

    static withValidData(){
        return TshirtWithStampTestDataBuilder
            .anTshirtWithStamp()
            .build();
    }

    static withInvalidStamp(){
        return TshirtWithStampTestDataBuilder
            .anTshirtWithStamp()
            .withInvalidStamp()
            .build();
    }
}