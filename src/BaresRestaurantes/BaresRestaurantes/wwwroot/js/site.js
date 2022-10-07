// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function filtroCategoria() {
    var inputCategoria, table, tr, i;
    inputCategoria = document.getElementById("dropCategoria");
    var categoria = inputCategoria[inputCategoria.selectedIndex].text;
    categoriaText = categoria.toUpperCase();
    table = document.getElementById("tbProdutos");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];

        if (td && inputCategoria.selectedIndex != 0) {
            if (td.innerHTML.toUpperCase().indexOf(categoriaText) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        } else {
            tr[i].style.display = "";
        }
    }
}

function sortTable2(table_id, sortColumn, btnName, btnNameDesc, tipo = 0) {
    var btn = document.getElementById(btnName);
    var btnDesc = document.getElementById(btnNameDesc);

    if (btn != null && btn.style != null)
        btn.style.color = "red";

    if (btnDesc != null && btnDesc.style != null)
        btnDesc.style.color = "black";

    var tableData = document.getElementById(table_id).getElementsByTagName('tbody').item(0);
    var rowData = tableData.getElementsByTagName('tr');
    for (var i = 0; i < rowData.length - 1; i++) {
        for (var j = 0; j < rowData.length - (i + 1); j++) {
            var item1 = rowData.item(j).getElementsByTagName('td').item(sortColumn).innerHTML.replace("%", "").replace(",", ".");
            var item2 = rowData.item(j + 1).getElementsByTagName('td').item(sortColumn).innerHTML.replace("%", "").replace(",", ".")
            if (tipo == 0) {
                //inteiro ou float
                if (parseFloat(item1) > parseFloat(item2)) {
                    tableData.insertBefore(rowData.item(j + 1), rowData.item(j));
                }
            }
            else if (tipo == 2) {
                //volume 51.222.111,00
                item1 = item1.replace(/\./g, '');
                item2 = item2.replace(/\./g, '');
                if (parseFloat(item1) > parseFloat(item2)) {
                    tableData.insertBefore(rowData.item(j + 1), rowData.item(j));
                }
            } else {
                //string
                if (item1.toLowerCase() > item2.toLowerCase()) {
                    tableData.insertBefore(rowData.item(j + 1), rowData.item(j));
                }
            }
        }
    }
}

function sortTableDesc2(table_id, sortColumn, btnName, btnNameDesc, tipo = 0) {
    var btn = document.getElementById(btnName);
    var btnDesc = document.getElementById(btnNameDesc);

    if (btn != null && btn.style != null)
        btn.style.color = "red";

    if (btnDesc != null && btnDesc.style != null)
        btnDesc.style.color = "black";

    var tableData = document.getElementById(table_id).getElementsByTagName('tbody').item(0);
    var rowData = tableData.getElementsByTagName('tr');
    for (var i = 0; i < rowData.length - 1; i++) {
        for (var j = 0; j < rowData.length - (i + 1); j++) {
            var item1 = rowData.item(j).getElementsByTagName('td').item(sortColumn).innerHTML.replace("%", "").replace(",", ".");
            var item2 = rowData.item(j + 1).getElementsByTagName('td').item(sortColumn).innerHTML.replace("%", "").replace(",", ".")
            if (tipo == 0) {
                //inteiro ou float
                if (parseFloat(item1) < parseFloat(item2)) {
                    tableData.insertBefore(rowData.item(j + 1), rowData.item(j));
                }
            } else if (tipo == 2) {
                //volume 51.222.111,00
                item1 = item1.replace(/\./g, '');
                item2 = item2.replace(/\./g, '');
                if (parseFloat(item1) < parseFloat(item2)) {
                    tableData.insertBefore(rowData.item(j + 1), rowData.item(j));
                }
            } else {
                //string
                if (item1.toLowerCase() < item2.toLowerCase()) {
                    tableData.insertBefore(rowData.item(j + 1), rowData.item(j));
                }
            }
        }
    }
}

