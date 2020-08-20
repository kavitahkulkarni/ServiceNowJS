// Server side
// Simple data query from SNOW table.
// Use of GetValue()

var gr = new GlideRecord('task');
gr.addActiveQuery();
gr.setLimit(2);
gr.query();

while (gr.next()) {
      number = gr.number;
      number2 = gr.getValue('number');

      gs.info("number="+number);
      gs.info("number2="+number2);
}


// Sample output
//*** Script: number=TOLTASK0001001
//*** Script: number2=TOLTASK0001001
//*** Script: number=TOLTASK0001002
//*** Script: number2=TOLTASK0001002
