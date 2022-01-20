$('.search-close').on('click', function () {
  $('.header_input').val('');
});

$('.nav_item').on('click', function () {
  $('.nav_item').removeClass('active');
  $(this).addClass('active');
});

$('.filter_categories-marker').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next().slideUp();
  } else {
    $(this).addClass('active');
    $(this).next().slideDown();
  }
});

$('.expand_filter .expand_btn').on('click', function () {
  if ($(this).closest('.expand_filter').hasClass('hidden')) {
    $(this).closest('.expand_filter').removeClass('hidden');
    $(this).next('.expand_options-wrapper').slideDown();
  } else {
    $(this).next('.expand_options-wrapper').slideUp();
    $(this).closest('.expand_filter').addClass('hidden');
  }
});

$('.expand_checkbox, .expand_checkbox-title').on('click', function () {
  $(this).siblings('input').attr('value')
    ? $(this).siblings('input').removeAttr('value')
    : $(this).siblings('input').attr('value', 1);
});

$('.product_filters-view-sorting').on('click', function () {
  const temp = $(this).closest('.product_filters-view-wrapper');
  $(temp).find('.product_filters-view-sorting').removeClass('active');
  $(temp).find(this).addClass('active');
});
