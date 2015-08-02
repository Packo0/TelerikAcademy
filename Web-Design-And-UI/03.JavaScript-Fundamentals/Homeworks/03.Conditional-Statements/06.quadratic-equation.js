//Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
//Calculates and prints its real roots.
//Note: Quadratic equations may have 0, 1 or 2 real roots.

var i,
    len,
    x1,
    x2,
    discriminant,
    a = [2, -1, -0.5, 5],
    b = [5, 3, 4, 2],
    c = [-3, 0, -8, 8];
for (i = 0, len = a.length; i < len; i += 1) {
    discriminant = b[i] * b[i] - 4 * a[i] * c[i];
    if (discriminant > 0) {
        x1 = (-b[i] - Math.sqrt(discriminant)) / (2 * a[i]);
        x2 = (-b[i] + Math.sqrt(discriminant)) / (2 * a[i]);
        console.log("x1 = " + x1 + "; x2 = " + x2);
    } else if(!discriminant){
    	x1 = -b[i]/ (2 * a[i]);
    	console.log("x1 = x2 = " + x1);
    } else{
    	console.log("No real roots!");
    }
}
