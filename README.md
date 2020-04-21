# SanskritDictionary
Digital HTML version of Kossovich Russian-Sanskrit dictionary

1. Added <script type="text/javascript" src="./scripts/copypaste.js"></script> to <head>
2. a)Added handler to <p class="stk" /> -> <p class="stk" onclick="copyShort()" ../> copypaste.js.copyShort - to copy short bibliograpy record
   b)Added handler to <p class="sa"  -> <p class="sa" onclick="copyLong()".../> copypaste.js.copyLong - to copy full bibliography record
3. Added <textarea id="copyBuffer" style=" left: -999px" /> - copyShort and copyLong use it for constructing bibliography record and putting result string into clipboard
  
