/*
MD 15/05/2024
This function computes Point2D argument to Point2D parameter distance.
*/
var center = script.addPoint2DParameter("Center", "Distance from");

function filter(inputs, minValues, maxValues, multiplexIndex)
{
    var p1 = center.get();
    result = Math.sqrt((inputs[0][0]-center[0][0])*(inputs[0][0]-center[0][0])+(inputs[0][1]-center[0][1])*(inputs[0][1]-center[0][1]));
	return result;
}