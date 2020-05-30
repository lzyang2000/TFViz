Blockly.Blocks['import_dataset_js'] = {
    init: function () {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("initialize environment");
        this.setTooltip("initilize keras environment");
        this.setHelpUrl("");
        this.setNextStatement(true);
    }
};