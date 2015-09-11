Ext.define("ToDo.view.Viewport", {
    renderTo: Ext.getBody(),
    extend: "Ext.container.Viewport",
    requires:[
        "Ext.tab.Panel",
        "Ext.layout.container.Border"
    ],

    layout: {
        type: "vbox",
        align: "center",
        pack: "center"
    },

    items: [{
        xtype: "panel",
        width: 500,
        height: 400,
        title: "ToDo - to-do list and task manager",
        items:[{
            border: false,
            xtype: "list_panel"
        }],
        dockedItems: [{
            xtype: "toolbar",
            items: [
                {
                    xtype: "button",
                    text: "New item",
                    action: "add_new"
                }
            ]
        }]
    }]
});