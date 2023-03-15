const service =  require("./service");
const sinon =  require("sinon");

const DATA_EXAMPLE1 = {
    nome:"lias",
    idade:16
}

const DATA_EXAMPLE2 = {
    nome:"Almeidas",
    idade:61
}


const ROUTE1 = "https://swapi.dev/api/planets";
const ROUTE2 = "https://swapi.dev/api/films";

( async ()=>{
        const Service = new service();
        const data = sinon.stub(Service,Service.getContent.name);

        data.withArgs(ROUTE1)
        .resolves(DATA_EXAMPLE1);

        data.withArgs(ROUTE2)
        .resolves(DATA_EXAMPLE2)
    {
        const data = await Service.getContent(ROUTE1);
        console.log(data)
    }

    
})()