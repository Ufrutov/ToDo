
Ext.define("ToDo.view.List",{
    extend: "Ext.grid.Panel",
    xtype: "list_panel",

    requires: [
    	"Ext.ux.CheckColumn"
    ],

    store: "ToDoList",
    columns: [{
        flex: 0.3,
        dataIndex: "name",
        text: "Name"
    }, {
        flex: 0.6,
        dataIndex: "desc",
        text: "Description"
    }, {
    	xtype : 'checkcolumn',
        flex: 0.1,
        dataIndex: "check",
        text: "Done"
    }]
});
