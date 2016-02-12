var folded = new OriDomi('.paper', {
  speed:           1600,  
  ripple:          4,     // backwards ripple effect when animating
  perspective:     400,   // smaller values exaggerate 3D distortion
  maxAngle:        90,    //fold range
  vPanels:         7, 
  hPanels:         2, 
  shading:         'soft', 
  touchEnabled:    true, 
  touchSensitivity: .25
  
});

//weird effects - comment/uncomment/switch orders/change values for MAXIMUM FUN
folded.stairs(40);  
folded.twist(30); 
folded.curl(20);
folded.accordion(-70); 

