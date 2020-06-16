Blockly.JavaScript['import_dataset_js'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'eel.import_dataset("fashion_mnist");\n';
    return code;
};
Blockly.JavaScript['tf_keras_layers_dense'] = function(block) {
  var value_units = Blockly.JavaScript.valueToCode(block, 'units', Blockly.JavaScript.ORDER_ATOMIC);
  var value_activation = Blockly.JavaScript.valueToCode(block, 'activation', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
Blockly.JavaScript['keras_dense'] = function(block) {
    var value_unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
    var value_network = Blockly.JavaScript.valueToCode(block, 'Network', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    return code;
  };
