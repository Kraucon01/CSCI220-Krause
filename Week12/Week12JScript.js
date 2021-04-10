$("form").submit(function(e){
    var name = $("input[name='name']").val();
    var title = $("input[title='title']").val();
    var date = $("input[date='date']").val();

    $(".data-table tbody").append("<tr data-name='"+name+"' data-title= '"+title+"' data-date= '"+date+"'><td>"+name+"</td><td>"+title+"</td><td>"+title+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='name']").val('');
    $("input[title='title']").val('');
    $("input[date='date']").val('');
});

$("body").on("click", ".btn-delete", function(){
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function(){
    var name = $(this).parents("tr").attr('data-name');
    var title = $(this).parents("tr").attr('data-title');
    var date = $(this).parents("tr").attr('data-date');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_title" value="'+title+'">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_date" value="'+date+'">');

    $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function(){
    var name = $(this).parents("tr").attr('data-name');
    var title = $(this).parents("tr").attr('data-title');
    var date = $(this).parents("tr").attr('data-date');

    $(this).parents("tr").find("td:eq(0)").text(name);
    $(this).parents("tr").find("td:eq(1)").text(title);
    $(this).parents("tr").find("td:eq(2)").text(title);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function(){
    var name = $(this).parents("tr").find("input[name='edit_name']").val();
    var title = $(this).parents("tr").find("input[name='edit_title']").val();
    var date = $(this).parents("tr").find("input[name='edit_date']").val();

    $(this).parents("tr").find("td:eq(0)").text(name);
    $(this).parents("tr").find("td:eq(1)").text(title);
    $(this).parents("tr").find("td:eq(2)").text(date);
 
    $(this).parents("tr").attr('data-name', name);
    $(this).parents("tr").attr('data-email', title);
    $(this).parents("tr").attr('data-email', date);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});

$('th').click(function(){
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc){rows = rows.reverse()}
    for (var i = 0; i < rows.length; i++){table.append(rows[i])}
})
function comparer(index) {
    return function(a, b) {
        var valA = getCellValue(a, index), valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
    }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).text() }