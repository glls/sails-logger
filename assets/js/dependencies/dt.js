$(document).ready(function() {

  jQuery.fn.dataTable.render.ellipsis = function(cutoff, wordbreak, escapeHtml) {
    var esc = function(t) {
      return t
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };

    return function(d, type, row) {
      // Order, search and type get the original data
      if (type !== 'display') {
        return d;
      }

      if (typeof d !== 'number' && typeof d !== 'string') {
        return d;
      }

      d = d.toString(); // cast numbers

      if (d.length <= cutoff) {
        return d;
      }

      var shortened = d.substr(0, cutoff - 1);

      // Find the last white space character in the string
      if (wordbreak) {
        shortened = shortened.replace(/\s([^\s]*)$/, '');
      }

      // Protect against uncontrolled HTML input
      if (escapeHtml) {
        shortened = esc(shortened);
      }

      return '<span class="ellipsis" title="' + esc(d) + '">' + shortened + '&#8230;</span>';
    };
  };

  $('#dtlog').DataTable({
    // "processing": true,
    // "serverSide": true,
    "columns": [
      { "data": "component" },
      { "data": "session" },
      { "data": "level" },
      { "data": "action" },
      { "data": "message" },
      { "data": "location" },
      { "data": "data" },
      { "data": "createdAt" },
      // { "data": "id" }
  ],
    "ajax": "/log/dtjson",
    "paging": true,
    "ordering": true,
    "info": false,
    fixedColumns: true,

    initComplete: function() {
      this.api().columns().every(function() {
        var column = this;
        if (column[0][0] > 2) return;

        var select = $('<select><option value=""></option></select>')
          .appendTo($(column.footer()).empty())
          .on('change', function() {
            var val = $.fn.dataTable.util.escapeRegex(
              $(this).val()
            );
            column
              .search(val ? '^' + val + '$' : '', true, false)
              .draw();
          });

        column.data().unique().sort().each(function(d, j) {
          select.append('<option value="' + d + '">' + d + '</option>')
        });
      });
    }

  });

});
