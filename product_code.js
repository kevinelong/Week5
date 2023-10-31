function parsePartCode(code){
    //split on both ':' and '-' using REGEX
    // const pieces = code.split(/[:-]+/)
    
    // let replaced = code.replace(":", "-");
    // const pieces = replaced.split("-");
    
    // const pieces = code.replace(":", "-").split("-")

    // const pieces = [
    //     code.split(":")[0],
    //     code.split(":")[1].split("-")[0],
    //     code.split("-")[1],
    // ];

    const left = code.split(":");
    const right = left[1].split("-")
    const pieces = [left[0],right[0],right[1]];

    return {
        supplierCode: pieces[0],
        productNumber: pieces[1],
        size: pieces[2],
    }
}
//TESTS
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);

console.log("Supplier: " + part1.supplierCode)
console.log("Product Number: " + part1.productNumber)
console.log("Size: " + part1.size);

/*
Supplier: XYZ
Product Number: 1234
Size: L
*/