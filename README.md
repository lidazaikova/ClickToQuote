# Click-to-Quote with Variables
Click - to - Quote script for Digital HTML version of Kossovich Russian-Sanskrit dictionary

1. Insert `<script type="text/javascript" src="./scripts/clicktoquote.js"></script>` to `<head>`
2. a)Insert handler to all paragraph elements of type `<p class="stk" />`
     Result: `<p class="stk" onclick="copyShort()"> </p>`
     Handler `clicktoquote.js.copyShort` - to copy short bibliograpy record
   
   b)Insert handler to all paragraph elements of type `<p class="sa" />`
      Result: `<p class="sa" onclick="copyLong()"> </p>`
      Handler `clicktoquote.js.copyLong` - to copy full bibliography record
3. Insert `<textarea id="copyBuffer" style=" left: -999px" />` - `clicktoquote.js.copyShort` and `clicktoquote.js.copyLong` use it 
   for constructing bibliography record and putting the result string into clipboard
  
