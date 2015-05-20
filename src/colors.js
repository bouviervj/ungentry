define([], function() {
    return {
        getColor: function(colorSeries, boundsArray, val) {
            var colors = colorSeries[boundsArray.length];
            for (var i in boundsArray) {
                if ((val-boundsArray[i]>=0) && (val-boundsArray[parseInt(i)+1]<0)) {
	            return colors[i];
                }
            }
            return colors[i];
        }
    };
});
