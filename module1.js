const {readFileSync, promises: fsPromises} = require('fs');
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
}
var Operator =
    {
        syncReadFile('./sample.txt');
        var name_1 : this.arr[0];
        var name_2 : this.arr[1];
        var name_3 : this.arr[2];
};


//
// document.getElementById('file').onchange = function(){
//     var name_1 : this.files[0];
//     var name_2 : this.files[1];
//     var name_3 : this.files[2];
// };
//
// document.getElementById('file').addEventListener('change', function() {
//     var file = new FileReader();
//     file.onload = () => {
//         document.getElementById('output').textContent = file.result;
//     }
//     file.readAsText(this.files[0]);

// var Operator =
//     {
//         name_1 : "Albert",
//         name_2 : "Bob",
//         name_3 : "Charles"
//     };