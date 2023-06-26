

export const ROUTES = [
    {
        path:"/home",
        controller:async function (req,res){
            console.log("entrou ");
            res.write("voce entrou na app HOME");
            res.end();
        }
    },
    {
        path:"/getData",
        controller:async function (req,res){
            res.write("vode esta pegando dados!");
            res.end();
        }
    }
]
