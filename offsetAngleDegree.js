/*
MD 17/03/2024 
This function takes one angle as variable, offset angle in degree as parameter
Output two azimuth normalised [-1,1]
*/
var offset= script.addFloatParameter("Offset", "Angle en degrés", 0, 0, 360);
function filter(azimuth, min, max)
{
var result = ((azimuth + (offset/360)+1)% 2 -1);
return result;
}