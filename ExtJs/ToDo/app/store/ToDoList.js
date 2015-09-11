Ext.define("ToDo.store.ToDoList", {
    extend: "Ext.data.Store",
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
    model: "ToDo.model.ToDo",
    autoLoad: true,
    proxy: {
        type: "localstorage",
        id  : "ToDoApp"
    }
});