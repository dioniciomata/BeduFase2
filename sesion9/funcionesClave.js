// document.body.appendChild(h1.appendChild(text))
// add class name and id to nodes
// // old function
//     function createNode(type, child) {
//         const node = document.createElement(type);
//         const text = document.createTextNode(child);

//         node.appendChild(text);

//         return node;
//     }

function createNode(type, child){
        
       const node = document.createElement(type);

       if (typeof child === "string"){
        const text = document.createTextNode(child);
        node.appendChild(text);
       } else {
        node.appendChild(child);
       }
       return node;

    }

    document.body.appendChild(createNode("div", "Hola"))
    document.querySelector("div").className = "parrafo";
    document.querySelector("div").id = "unique";
    document.body.lastChild.appendChild(createNode("p", "p dentro de div"))


// Reemplazar todas las imágenes del documento (etiquetas <img/>) con el texto que contienen en el atributo alt.
     
        var images = document.getElementsByTagName("img");
        console.log(images);

        for (var i = images.length-1; i >= 0; i--) {
            var image = images[i];
            if (image.alt){
                let text = document.createTextNode(image.alt);
                image.parentNode.replaceChild(text, image)
            }
        }


// Crear tabla a partir de arreglo de objetos
        // create HTMLResponse node
        const mountains = document.getElementById("mountains");

        //createNode function
        function createNode(type, child){
          const node = document.createElement(type);
          if (typeof child === "string"){
          const text = document.createTextNode(child);
          node.appendChild(text);
          } else {
          node.appendChild(child);
          }
          return node;
        }

        // pass an array of objects to build a table
        function buildTable(data){
          let table = document.createElement("table");
          const fields = ["Name", "Height", "Place"];
          let headRow = document.createElement("tr");

          // fields.forEach(function(field){
          //     let headCell = document.createElement("th")
          //     headCell.appendChild(document.createTextNode(field))
          //     headRow.appendChild(headCell)
          // });

            // create and append header row
            for (const field of fields) {
              let headCell = document.createElement("th")
              headCell.appendChild(document.createTextNode(field))
              headRow.appendChild(headCell)
            }
            table.appendChild(headRow);

            // create one row for each object in array
            for (const mountain of data) {
              let row = document.createElement("tr");
              const valores = Object.values(mountain);
              // console.log(valores); // ['Kilimanjaro', 5895, 'Tanzania']

              // create one cell for each value
              valores.forEach(function(valor){
                console.log(valor)
                let cell = document.createElement("td")
                cell.appendChild(document.createTextNode(valor))
                row.appendChild(cell);
              });
              table.appendChild(row);
            }


          // console.log(data, fields, headRow, table)

          return table;
        }
      
        mountains.appendChild(buildTable(data))

