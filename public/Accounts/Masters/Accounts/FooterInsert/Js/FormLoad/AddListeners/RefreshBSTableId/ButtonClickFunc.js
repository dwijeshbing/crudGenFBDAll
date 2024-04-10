import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";

let StartFunc = () => {
    jFLocalHideSpinner();
    
    var $table = $('#table');

    $table.bootstrapTable({
        onLoadSuccess: StartFuncOnLoadSuccess
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalSearchItemButtonId = () => {
    let jVarLocalHtmlId = "searchButtonId";
    let jVarLocaljVarLocalHtmlId = document.getElementById(jVarLocalHtmlId);
    console.log("jVarLocaljVarLocalHtmlId : ", jVarLocaljVarLocalHtmlId);
    jVarLocaljVarLocalHtmlId.addEventListener("click", jFLocalButtonClick);
};

let jFLocalButtonClick = () => {
    const myModal = new bootstrap.Modal('#largeModal', {
        keyboard: true
    });

    myModal.show();
};

let jFLocalButtonClick1 = () => {
    let jVarLocalHtmlId = "largeModal";
    let jVarLocallargeModal = document.getElementById(jVarLocalHtmlId);
    console.log("jVarLocallargeModal : ", jVarLocallargeModal);
    jVarLocallargeModal.addEventListener('shown.bs.modal', event => {
        let jVarLocalHtmlId = "customSearch";
        let jVarLocalcustomSearch = document.getElementById(jVarLocalHtmlId);
        jVarLocalcustomSearch.focus();

        var $table = $('#ModalItemsTable');

        $table.bootstrapTable({
            data: jFFromLocalStorage(),
            onClickRow: jFLocalRowClick
        });
        // do something...
    });

    const myModal = new bootstrap.Modal('#largeModal', {
        keyboard: false
    });

    myModal.show();


    // $table.bootstrapTable({
    //     onPostBody: function () {
    //         $(".fixed-table-toolbar .search .search-input").focus()
    //     }
    // });
};

export { StartFunc }