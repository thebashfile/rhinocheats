!function($)
{
    Header = {
        init: function () {
            Header.SearchBar();
            Header.BrvCustomMenu();
            Header.SearchResponsive();
        },

        SearchBar: function () {
            $('.p-discovery').ready(function () {

                $('.search--control').click(function (e) {
                    if($(this).parent().children('.search-area').hasClass('show')){
                        $(this).parent().children('.search-area').removeClass('show');
                    }else {
                        $(this).parent().children('.search-area').addClass('show');
                    }

                    if($(this).parents('.p-pageWrapper').hasClass('active')){
                        $(this).parents('.p-pageWrapper').removeClass('active');
                    }else {
                        $(this).parents('.p-pageWrapper').addClass('active');
                    }
                    e.stopPropagation();
                });
                $('.search-input').click(function (e) {
                    $(this).parent().children('.search-option').addClass('active');
                    e.stopPropagation();
                });
                $('.search-option').click(function (e) {
                    e.stopPropagation();
                })
            });
            $('body, html').click(function () {
                $('.search-option').removeClass('active');
                $('.search-area').removeClass('show');
                $('.p-pageWrapper').removeClass('active');
            });
        },

        BrvCustomMenu: function () {
            var link_menu = $('.brv-main-nav li .is-selected .p-navEl-link').attr('href'),
                text_menu = $('.brv-main-nav li .is-selected .p-navEl-link').text(),
                link_df = $('.brv-main-nav li .p-navEl-link[data-nav-id="forums"]').attr('href'),
                text_df = $('.brv-main-nav li .p-navEl-link[data-nav-id="forums"]').text();

            if (text_menu.length){
                $('.brv-nav .brv-nav__control .brv-nav--mid .item-menu').attr('href', link_menu).text(text_menu);
            }else {
                $('.brv-nav .brv-nav__control .brv-nav--mid .item-menu').attr('href', link_df).text(text_df);
            }

            $('.control-menu').click(function () {
                if ($(this).parents('.brv-nav').children('.brv-main-nav').hasClass('active')){
                    $(this).parents('.brv-nav').children('.brv-main-nav').removeClass('active');
                    $(this).children('.fa').addClass('fa-caret-right').removeClass('fa-caret-down');
                }else {
                    $(this).parents('.brv-nav').children('.brv-main-nav').addClass('active');
                    $(this).children('.fa').removeClass('fa-caret-right').addClass('fa-caret-down');
                }
            });
        },

        SearchResponsive: function () {
            var $data = $('.p-nav .p-discovery'),
                $search = $data.html(),
                $target = $('.search--sm');

            if ($(window).width() < 900 ){
                $data.empty();
                $target.html($search);
            }
        }
    };

    Mainbody = {
        init: function () {
            Mainbody.ControlBlockHeader();
            Mainbody.BrvTooltip();
            Mainbody.BrvNewTags();
        },

        ControlBlockHeader: function () {
            var $datamino = $('.block-minorHeader'),
                $dataheader = $('.p-body-sideNav .block-header,.p-body-sidebar .block-header');

            $datamino.each(function () {
                $(this).wrapInner('<span class="brv-line-block"></span>');
            });
            $dataheader.each(function () {
                $(this).wrapInner('<span class="brv-line-block"></span>');
            });

            var html = '<span class="block-control fa fa-angle-up"></span>';
            var html1 = '<span class="block-control fa fa-angle-up"></span>';

            $('.block--category .block-header').append(html);
            $(html1).insertAfter('.brv-line-block');


            $('.block-control').click(function () {
                if ($(this).parents('.block-container').children('.block-body').hasClass('active')){
                    $(this).parents('.block-container').children('.block-body').removeClass('active').slideDown('400');
                    $(this).removeClass('fa-angle-down').addClass('fa-angle-up');
                }else {
                    $(this).parents('.block-container').children('.block-body').addClass('active').slideUp('400');
                    $(this).addClass('fa-angle-down').removeClass('fa-angle-up');
                }
            });
        },

        BrvTooltip: function () {
            $('.block--category').each(function () {
                var $data = $('.block-header >a'),
                    w1 = $data.width() + 40,
                    dir = $('html').attr('dir');
                if ( dir == 'RTL'){
                    $('.show-tooltip').css('right', w1);
                } else {
                    $('.show-tooltip').css('left', w1);
                }

                $data.mouseenter(function () {
                    $(this).parents('.block-header').addClass('hover--tooltip');
                });
                $data.mouseleave(function () {
                    $(this).parents('.block-header').removeClass('hover--tooltip');
                })
            });
        },

        BrvNewTags: function () {
            var contenttag = $('body[data-template="thread_view"] .p-body .p-body-inner .p-body-header .p-description ul li+li+li').html();
            $('body[data-template="thread_view"] .new_tags_brv').append(contenttag);
        }
    };

    Footer = {
        init: function () {

        }
    };

    Sidebar = {
        init: function () {
            Sidebar.ControlSidebar();
        },

        ControlSidebar: function () {
            var sidebar = '<span class="control-sidebar fa fa-align-justify hidden-xs"></span>',
                w_content =  $('.p-body-inner .p-body-content').width(),
                w_sidebar =  $('.p-body-inner .p-body-sidebar').width();


            var ctrsidebar = function () {
                if ($(window).width() > 768){
                    $('.p-body-main--withSidebar').parents('.p-pageWrapper').find('.brv-breadcrumbs .brv-breadcrumbs-inner').append(sidebar);
                }
            };

            ctrsidebar();

            $('.control-sidebar').click(function () {
                if ($(this).parents('.p-pageWrapper').find('.p-body-sidebar').hasClass('hide')){
                    $(this).parents('.p-pageWrapper').find('.p-body-sidebar').removeClass('hide').slideDown();
                    $(this).parents('.p-pageWrapper').find('.p-body-content').removeClass('edit-padd').removeAttr('style');
                }else {
                    $(this).parents('.p-pageWrapper').find('.p-body-sidebar').addClass('hide').slideUp();
                    $(this).parents('.p-pageWrapper').find('.p-body-content').addClass('edit-padd').width(w_content + w_sidebar);
                }
            });
        }
    };

    OnReady = {
        init: function () {
            Header.init();
            Mainbody.init();
            Footer.init();
            Sidebar.init();
        }
    };

    $(document).ready(function () {
        OnReady.init();
    });
    

}(jQuery);