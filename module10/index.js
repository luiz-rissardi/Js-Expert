const data = [
    {nome:"luiz",idade:17,cpf:"26363123"},
    {nome:"ana",idade:98,cpf:"423742344"},
    {nome:"diovanna",idade:37,cpf:"83459754534"},
    {nome:"eduardo",idade:18,cpf:"13893273"},
];

function parseToHeaderTable(data){
    const [ firstItem ] = data
    const headers = Object
                    .keys(firstItem)
                    .map(el => `<th scope="col">${el}</th>`)
                    .reduce((acc,el) => acc += el ,``);
    return `<thead> ${headers} </thead>`
}

function parseToBodyTable(data){
    const inner = tds => tds.join("")
    let body = data
                .map(el => Object.values(el))
                .map(el => el.map(td => `<td>${td}</td>`))
                .map(tds => `<tr>${inner(tds)}</tr>`)
    return `<tbody>${body}</tbody>`
}

function main(){
    const headers = parseToHeaderTable(data);
    const body = parseToBodyTable(data).replace(/,/gi," ")
    console.log(body);
    const table = document.getElementById("container")
    table.innerHTML += headers + body
}
main();

let t4 = 2;
let t3 = 2;
const t1 = t4;

console.log(t1);


