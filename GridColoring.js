//designed by Mohammadreza Amini

//////////////////////////////////
//             UI               //
//////////////////////////////////

var blockSize = 0;
var cal = new Window ("dialog", "Cell Size");
var cal_char = cal.add("edittext", [25,40,135,60], "");

//BUTTONS

var btnGroup = cal.add ("group");
btnGroup.orientation = "row";
btnGroup.alignment = "center";
btnGroup.add ("button", undefined, "OK");
btnGroup.add ("button", undefined, "Cancel")
cal.center();

var myReturn = cal.show();

if (myReturn == 1)
{
 
    var blockSize = cal_char.text;
}

//////////////////////////////////
//             LOGIC            //
//////////////////////////////////

blockSize = parseInt(blockSize,10);
if(blockSize!=0){
	var docRef = app.activeDocument;
	var mylayer = docRef.activeLayer;
	mylayer.isBackgroundLayer = false;
	mylayer.name = "changed_layer"

	var width = app.activeDocument.width.as("px");
	var height = app.activeDocument.height.as("px");

	var i;
	var j;

	var wnum = width / blockSize;
	var hnum = height / blockSize;
	var docRef = app.activeDocument;

	wnum = Math.floor(wnum) ;
	hnum = Math.floor(hnum) ;

	for(i = 0 ; i < wnum ; i++){
		for(j = 0 ; j < hnum ; j++){
			var shapeRef = [ [ i*blockSize , j*blockSize ] , [ (i*blockSize)+blockSize , j*blockSize ]  , [ (i*blockSize)+blockSize , (j*blockSize)+blockSize ] , [i*blockSize , (j*blockSize)+blockSize]];
			docRef.selection.select(shapeRef);
			var layerRef = docRef.artLayers.getByName("changed_layer");
			layerRef.applyAverage();
		}
	}
}


