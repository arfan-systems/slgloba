(function ($, Drupal, drupalSettings) {
    /**
     * @namespace
     */
    // Global presence paragraph Start
    {
        var global_presence = drupalSettings.global_presence;
        if (global_presence) {
            let Observer = new IntersectionObserver(
                function (entries, Observer) {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Add your code here
                            $({someValue: 0}).animate({someValue: Number(global_presence.field_years.replace(/\+/g, ''))}, {
                                duration: 3000,
                                easing: 'swing', // can be anything
                                step: function () { // called on every step
                                    // Update the element's text with rounded-up value:
                                    $('#numYears').text(Math.round(this.someValue) + '+');
                                }
                            });
                            $({someValue: 0}).animate({someValue: Number(global_presence.field_employee.replace(/\+/g, ''))}, {
                                duration: 3000,
                                easing: 'swing', // can be anything
                                step: function () { // called on every step
                                    // Update the element's text with rounded-up value:
                                    $('#numEmp').text(Math.round(this.someValue) + '+');
                                }
                            });
                            $({someValue: 0}).animate({someValue: Number(global_presence.field_continents.replace(/\+/g, ''))}, {
                                duration: 3000,
                                easing: 'swing', // can be anything
                                step: function () { // called on every step
                                    // Update the element's text with rounded-up value:
                                    $('#numConti').text(Math.round(this.someValue) + '+');
                                }
                            });
                            $({someValue: 0}).animate({someValue: Number(global_presence.field_clients.replace(/\+/g, ''))}, {
                                duration: 3000,
                                easing: 'swing', // can be anything
                                step: function () { // called on every step
                                    // Update the element's text with rounded-up value:
                                    $('#numProjects').text(Math.round(this.someValue) + '+');
                                }
                            });

                            function commaSeparateNumber(val) {
                                while (/(\d+)(\d{3})/.test(val.toString())) {
                                    val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                }
                                return val;
                            }

                            // my code end
                            console.log(" I am visible on viewport")
                            Observer.unobserve(entry.target);
                        }
                    });
                }, options);

            elements.forEach(element => {
                Observer.observe(element);
            })
        }
    }
    // Global presence paragraph End
})(jQuery, Drupal, drupalSettings);
