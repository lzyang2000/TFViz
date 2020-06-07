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
Blockly.Blocks['keras_dense'] = {
    init: function() {
        this.appendValueInput("unit")
            .setCheck("Number")
            .appendField("unit");
        this.appendValueInput("Network")
            .setCheck("String")
            .appendField("Network");
        this.setColour(0);
     this.setTooltip("");
     this.setHelpUrl("");
    }
};

Blockly.Blocks['keras_sparse'] = {
  init: function() {
    this.appendValueInput("unit")
        .setCheck("Number")
        .appendField("unit");
    this.appendValueInput("Network")
        .setCheck("String")
        .appendField("Network");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
  };
