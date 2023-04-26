odoo.define("ts-widgets.ts-zip-field", function (require) {
  "use strict";

  var field_registry = require("web.field_registry");
  const basic_fields = require("web.basic_fields");

  var TsZipField = basic_fields.InputField.extend({
    /**
     * @private
     */
    _onBlur: function () {
      this._super.apply(this, arguments);
      const changes = {
        city: "Tokyo",
        country_id: { id: 20 },
      };
      console.log(this, this.dataPointID, this.viewType);
      this.trigger_up("field_changed", {
        dataPointID: this.dataPointID,
        viewType: this.viewType,
        changes: changes,
      });
    },
  });

  field_registry.add("ts-zip-field", TsZipField);

  return TsZipField;
});
