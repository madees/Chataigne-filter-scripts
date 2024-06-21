// Input Point2D polar (Azimuth,Distance) array array (azimuth range is [-1,-1] normalised)
// Output Point2D cartesian (X,Y) array (range [-1,1])

function filter(values, min, max)
{
	var result = [];
	for(var i=0;i<values.length;i++)
	{
		var d = values[i][0];
		var a = values[i][1];
		var x = Math.cos(a*2*Math.PI)*d;
	    var y = Math.sin(a*2*Math.PI)*d;
		result[i] = [x, y];
	}
	
	return result;
	
}