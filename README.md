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

