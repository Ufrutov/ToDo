Ext.define("ToDo.model.ToDo", {
    extend: "Ext.data.Model",
    
    fields: [
    	{ name: "name",  type: "string" },
    	{ name: "desc",  type: "string" },
        { name: "check", type: "boolean" }

    ]
});
