var FormElements = function() {
    var a = function() {
            // $(".limited").maxlength({
            //     threshold: 50,
            //     warningClass: "label label-info",
            //     limitReachedClass: "label label-warning",
            //     message: "used %charsTyped% of %charsTotal% chars."
            // })
        },
        b = function() {
            autosize($(".autosize"))
        },
        c = function() {
            $(".search-select").select2({
                placeholder: "Select a State",
                allowClear: !0
            })
        },
        d = function() {
            // $.mask.definitions["~"] = "[+-]", $(".input-mask-date").mask("99/99/9999"), $(".input-mask-phone").mask("(999) 999-9999"), $(".input-mask-eyescript").mask("~9.99 ~9.99 999"), $(".input-mask-product").mask("a*-999-a999", {
            //     placeholder: " ",
            //     completed: function() {
            //         alert("You typed the following: " + this.val())
            //     }
            // })
        },
        e = function() {
            // $(".currency").maskMoney()
        },
        f = function() {
            $(".date-picker").datepicker({
                autoclose: !0,
                container: "#picker-container"
            })
        },
        g = function() {
            // $(".time-picker").timepicker()
        },
        h = function() {
            // $(".date-range").daterangepicker(), $(".date-time-range").daterangepicker({
            //     timePicker: !0,
            //     timePickerIncrement: 30,
            //     locale: {
            //         format: "MM/DD/YYYY h:mm A"
            //     }
            // })
        },
        i = function() {
            // $(".color-picker").colorpicker({
            //     format: "hex"
            // }), $(".color-picker-rgba").colorpicker({
            //     format: "rgba"
            // }), $(".colorpicker-component").colorpicker()
        },
        j = function() {
            $("#tags_1").tagsInput({
                width: "auto"
            })
        },
        k = function() {
            // $(".summernote").summernote({
            //     height: 300,
            //     tabsize: 2
            // })
        },
        l = function() {
            // CKEDITOR.disableAutoInline = !0, $("textarea.ckeditor").ckeditor()
        },
        m = function() {
            $("#input-simple").fileinput(), $("#input-preview").fileinput();
            $("#avatar").fileinput({
                overwriteInitial: !0,
                maxFileSize: 2e3,
                showClose: !1,
                showCaption: !1,
                browseLabel: "",
                removeLabel: "",
                browseIcon: '<i class="fa fa-folder-open"></i>',
                removeIcon: '<i class="fa fa-remove"></i>',
                removeTitle: "Cancel or reset changes",
                elErrorContainer: "#kv-avatar-errors",
                msgErrorClass: "alert alert-block alert-danger",
                defaultPreviewContent: '<img src="http://www.placehold.it/160x160/EFEFEF/AAAAAA?text=no+image" alt="Your Avatar" >',
                layoutTemplates: {
                    main2: "{preview} {remove} {browse}"
                },
                allowedFileExtensions: ["jpg", "png", "gif"]
            })
        };
    return {
        init: function() {
            a(), b(), c(), d(), e(), f(), g(), h(), i(), j(), k(), l(), m()
        }
    }
}();