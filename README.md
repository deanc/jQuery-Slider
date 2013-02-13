jQuery Slider
====

Usage
----

1. Include the relevent scripts:

        <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script type="text/javascript" src="jquery.slider.js"></script>

2. Add the markup:

        <div id="slider" class="dcSlider">
            <div class="slider-holder">
                <ul>
                    <li><img src="http://placehold.it/1170x400" /></li>
                    <li><img src="http://placehold.it/1170x400" /></li>
                    <li><img src="http://placehold.it/1170x400" /></li>
                    <li><img src="http://placehold.it/1170x400" /></li>
                    <li><img src="http://placehold.it/1170x400" /></li>
                    <li><img src="http://placehold.it/1170x400" /></li>
                    <li><img src="http://placehold.it/1170x400" /></li>
                    <li><img src="http://placehold.it/1170x400" /></li>
                </ul>
            </div>
            <ul class="controls">
                <li><a class="slider-prev">Previous</a></li>
                <li><a class="slider-next">Next</a></li>
            </ul>
       </div>

3. Initialise the slider:

         $("#slider").slider({showPager: false});

Options
----

`animationSpeed` The speed of the transition between slides in milliseconds. Default `1000`

`animationType` The animation type to use for transition between slides. Default `swing`

`startPage` The page on which to begin the slider. Default `1`

`onPageChangeStart` An optional callback function to be called when the page change begins. Default `null`

`onPageChangeEnd` An optional callback function to be called when the page change ends. Default `null`

`showPager` Whether to show the number of pages or not. Default `true`

`controls` Whether to show the prev/next controls. Default `true`

`prevClass` The CSS class to be applied to the previous slide control. Defaullt `slider-prev`

`nextClass` The CSS class to be applied to the next slide control. Default `slider-next`
