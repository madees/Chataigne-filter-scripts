// Input Point2D cartesian (X,Y) array (range [-1,1])
// Output Point2D polar (Azimuth,Distance) array (azimuth range is [-1,-1] normalised)

function filter(values, min, max)
{
	var result = [];
	for(var i=0;i<values.length;i++)
	{
		var x = values[i][0];
		var y = values[i][1];
		var distance = Math.sqrt(x*x + y*y);
	    var radians = Math.atan2(y,x)/2/Math.PI;
		result[i] = [distance, radians];
	}
	
	return result;
	
}