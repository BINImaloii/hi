const pi = 3.14;
let r = 6378e3;


let cCircum = 2 * pi * r;
let surfArea = (4 * pi) * (r ** 2);
let vVolume = (4 / 3) * pi * (r ** 3);

document.write('The radius is: ' + r + '.'+ '<br>');
document.write('The circumference is: ' + cCircum + '.'+ '<br>');
document.write('The surface area is: ' + surfArea + '.'+ '<br>');
document.write('The volume is: ' + vVolume + '.'+ '<br>');
