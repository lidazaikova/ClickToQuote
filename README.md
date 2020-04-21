# Click-to-Quote with Variables
Click - to - Quote script for Digital HTML version of Kossovich Russian-Sanskrit dictionary

1. Added `<script type="text/javascript" src="./scripts/clicktoquote.js"></script>` into `<head>`
2. a)Added handler into paragraph elements of `<p class="stk" />`
   Handler `clicktoquote.js.copyShort` - to copy short bibliograpy record
   
   b)Added handler into paragraph elements of `<p class="sa" />`
   Handler `clicktoquote.js.copyLong` - to copy full bibliography record
3. Added `<textarea id="copyBuffer" style=" left: -999px" />` - copyShort and copyLong use it 
   for constructing bibliography record and putting the result string into clipboard
  
