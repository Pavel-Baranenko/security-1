$(function () {
  $('#showmore-button').click(function () {
    // Селектор контейнера с записями
    var selector = '#showmore-list .prod-list';

    var $target = $(this);
    var page = $target.attr('data-page');
    page++;

    $.ajax({
      url: '?page=' + page,
      dataType: 'html',
      success: function (data) {
        $(selector).append($(data).find(selector).html());
      }
    });

    $target.attr('data-page', page);
    if (page == $target.attr('data-max')) {
      $target.hide();
    }

    return false;
  });
});