// referencing our html tag`
var folded = new OriDomi('.paper', {
  speed:           1600,  
  ripple:          4,     // reverse rippling 
  perspective:     400,   
  maxAngle:        90,    //folding range
  vPanels:         7, 
  hPanels:         2, 
  shading:         'soft', 
  touchEnabled:    true, 
  touchSensitivity: .25
  // wew lol
});

// ypu can cchange these around to make it visually differing
folded.stairs(40);  
folded.twist(30); 
folded.curl(20);// also numbers can be changed
folded.accordion(-70); 

